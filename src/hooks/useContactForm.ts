import { useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/components/ui/use-toast';

interface ContactFormData {
  studentName: string;
  parentName: string;
  phoneNumber: string;
  classLevel: string;
  message: string;
}

interface ValidationErrors {
  studentName?: string;
  parentName?: string;
  phoneNumber?: string;
  classLevel?: string;
}

export const useContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<ValidationErrors>({});
  const { toast } = useToast();

  // Input sanitization function
  const sanitizeInput = (input: string): string => {
    return input
      .trim()
      .replace(/[<>\"']/g, '') // Remove potentially dangerous characters
      .substring(0, 500); // Limit length
  };

  // Phone number validation
  const validatePhoneNumber = (phone: string): boolean => {
    const phoneRegex = /^[6-9]\d{9}$/; // Indian mobile number format
    return phoneRegex.test(phone.replace(/\D/g, ''));
  };

  // Form validation
  const validateForm = (data: ContactFormData): ValidationErrors => {
    const newErrors: ValidationErrors = {};

    if (!data.studentName || data.studentName.length < 2) {
      newErrors.studentName = 'Student name must be at least 2 characters';
    }

    if (!data.parentName || data.parentName.length < 2) {
      newErrors.parentName = 'Parent name must be at least 2 characters';
    }

    if (!data.phoneNumber || !validatePhoneNumber(data.phoneNumber)) {
      newErrors.phoneNumber = 'Please enter a valid 10-digit phone number';
    }

    if (!data.classLevel) {
      newErrors.classLevel = 'Please select a class/standard';
    }

    return newErrors;
  };

  const submitForm = async (formData: ContactFormData) => {
    setIsSubmitting(true);
    setErrors({});

    try {
      // Validate form data
      const validationErrors = validateForm(formData);
      if (Object.keys(validationErrors).length > 0) {
        setErrors(validationErrors);
        setIsSubmitting(false);
        return false;
      }

      // Sanitize all inputs
      const sanitizedData = {
        student_name: sanitizeInput(formData.studentName),
        parent_name: sanitizeInput(formData.parentName),
        phone_number: sanitizeInput(formData.phoneNumber.replace(/\D/g, '')),
        class_level: sanitizeInput(formData.classLevel),
        message: formData.message ? sanitizeInput(formData.message) : null,
      };

      // Submit to Supabase
      const { error } = await supabase
        .from('contact_submissions')
        .insert([sanitizedData]);

      if (error) {
        console.error('Error submitting contact form:', error);
        toast({
          title: 'Submission Failed',
          description: 'Please try again or contact us directly.',
          variant: 'destructive',
        });
        return false;
      }

      toast({
        title: 'Inquiry Submitted Successfully!',
        description: 'We will contact you soon. Thank you for your interest.',
      });

      return true;
    } catch (error) {
      console.error('Contact form submission error:', error);
      toast({
        title: 'Submission Failed',
        description: 'Please try again or contact us directly.',
        variant: 'destructive',
      });
      return false;
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    submitForm,
    isSubmitting,
    errors,
  };
};