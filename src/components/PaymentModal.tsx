
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CreditCard, Smartphone, Building, X } from 'lucide-react';

interface PaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
  amount: string;
}

const PaymentModal = ({ isOpen, onClose, amount }: PaymentModalProps) => {
  const [paymentMethod, setPaymentMethod] = useState<string>('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');

  const handlePayment = () => {
    console.log('Processing payment:', { paymentMethod, amount, phoneNumber, email });
    alert(`Thank you for your ${amount} donation via ${paymentMethod}! This will be connected to a payment processor soon.`);
    onClose();
  };

  const paymentMethods = [
    {
      id: 'momo',
      name: 'Mobile Money',
      icon: Smartphone,
      description: 'MTN Mobile Money, Vodafone Cash, AirtelTigo Money',
      fields: ['phone', 'email']
    },
    {
      id: 'bank',
      name: 'Bank Transfer',
      icon: Building,
      description: 'Direct bank transfer to our foundation account',
      fields: ['email']
    },
    {
      id: 'card',
      name: 'Credit/Debit Card',
      icon: CreditCard,
      description: 'Visa, Mastercard, and other major cards',
      fields: ['email']
    }
  ];

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center justify-between">
            Donate {amount}
            <Button variant="ghost" size="sm" onClick={onClose}>
              <X className="h-4 w-4" />
            </Button>
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-4">
          <div className="text-center p-4 bg-primary/10 rounded-lg">
            <h3 className="text-lg font-semibold text-primary">Your contribution of {amount}</h3>
            <p className="text-sm text-muted-foreground">will help transform lives in Ghana</p>
          </div>

          <div className="space-y-3">
            <h4 className="font-medium">Choose Payment Method</h4>
            {paymentMethods.map((method) => (
              <Card 
                key={method.id} 
                className={`cursor-pointer transition-all hover:shadow-md ${
                  paymentMethod === method.id ? 'ring-2 ring-primary' : ''
                }`}
                onClick={() => setPaymentMethod(method.id)}
              >
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center gap-3 text-sm">
                    <method.icon className="h-5 w-5 text-primary" />
                    {method.name}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-xs text-muted-foreground">{method.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {paymentMethod && (
            <div className="space-y-3 animate-fade-in">
              <Input
                type="email"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {paymentMethod === 'momo' && (
                <Input
                  type="tel"
                  placeholder="Mobile number (e.g., 0241234567)"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                />
              )}
              <Button 
                className="w-full animate-scale-in" 
                onClick={handlePayment}
                disabled={!email || (paymentMethod === 'momo' && !phoneNumber)}
              >
                Complete Donation
              </Button>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PaymentModal;
