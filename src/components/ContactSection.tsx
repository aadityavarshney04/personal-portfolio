import React, { useState } from 'react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Mail, Github, Linkedin, Code, Loader2 } from 'lucide-react';
import { Label } from './ui/label';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useToast } from '@/hooks/use-toast';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import { AspectRatio } from './ui/aspect-ratio';

const formSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  subject: z.string().min(1, "Subject is required"),
  message: z.string().min(10, "Message must be at least 10 characters")
});

type FormValues = z.infer<typeof formSchema>;

const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      subject: '',
      message: ''
    }
  });

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    try {
      emailjs.init("3SEIZN4PeX5g-SfU_");
      const templateParams = {
        from_name: data.name,
        from_email: data.email,
        subject: data.subject,
        message: data.message
      };
      await emailjs.send(
        "service_6gz0rio",
        "template_wez8d2t",
        templateParams
      );
      toast({
        title: "Message Sent",
        description: "Your message was sent successfully! I will get back to you soon.",
        variant: "default"
      });
      reset();
    } catch (error) {
      toast({
        title: "Failed to Send",
        description: "There was an error sending your message. Please try again later.",
        variant: "destructive"
      });
      console.error("Error sending email:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-2">Get In Touch</h2>
          <div className="w-20 h-1 bg-amber-400 mx-auto mb-6"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Feel free to reach out for collaborations, projects, or networking opportunities.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
          {/* Contact Information */}
          <motion.div
            className="w-full lg:w-1/2 flex justify-center lg:justify-start"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <Card className="bg-gray-800 border-gray-700 w-full max-w-xl">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <Mail className="text-amber-400 mr-4 h-6 w-6" />
                    <div>
                      <h4 className="text-white font-semibold">Email</h4>
                      <p className="text-gray-300">aaditya.varshney04@gmail.com</p>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-3">Social Profiles</h4>
                    <div className="flex space-x-4">
                      <a href="https://www.linkedin.com/in/aaditya-varshney-4043b6326/" target="_blank" rel="noopener noreferrer" className="bg-gray-700 p-3 rounded-full text-white hover:bg-amber-400 hover:text-black transition-colors">
                        <Linkedin className="h-6 w-6" />
                      </a>
                      <a href="https://github.com/Aadi-Varshney" target="_blank" rel="noopener noreferrer" className="bg-gray-700 p-3 rounded-full text-white hover:bg-amber-400 hover:text-black transition-colors">
                        <Github className="h-6 w-6" />
                      </a>
                      <a href="https://leetcode.com/u/Adrenaline_Aadi/" target="_blank" rel="noopener noreferrer" className="bg-gray-700 p-3 rounded-full text-white hover:bg-amber-400 hover:text-black transition-colors">
                        <Code className="h-6 w-6" />
                      </a>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            className="w-full lg:w-1/2 flex justify-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <div className="relative group w-60 h-60 lg:w-80 lg:h-80">
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-amber-400/30 to-transparent blur-md scale-105 group-hover:scale-110 transition-transform duration-500 pointer-events-none" />
              <motion.div
                className="rounded-full overflow-hidden border-4 border-amber-400 shadow-lg"
                whileHover={{ scale: 1.05 }}
                whileInView={{ y: [40, 0], opacity: [0, 1] }}
                transition={{ type: "spring", stiffness: 120, damping: 12 }}
              >
                <AspectRatio ratio={1} className="w-full h-full">
                  <img
                    src="https://i.postimg.cc/Cx3K8cjm/Profile-Photo.jpg"
                    alt="Aaditya Varshney"
                    className="object-cover w-full h-full"
                  />
                </AspectRatio>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Contact Form */}
        <div className="mt-16 max-w-3xl mx-auto">
          <Card className="bg-gray-800 border-gray-700">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>
              <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-white">Name</Label>
                    <Input id="name" placeholder="Your Name" className="bg-gray-700 border-gray-600 text-white focus:border-amber-400" {...register("name")} />
                    {errors.name && <p className="text-red-400 text-sm mt-1">{errors.name.message}</p>}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-white">Email</Label>
                    <Input id="email" type="email" placeholder="Your Email" className="bg-gray-700 border-gray-600 text-white focus:border-amber-400" {...register("email")} />
                    {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email.message}</p>}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject" className="text-white">Subject</Label>
                  <Input id="subject" placeholder="Subject" className="bg-gray-700 border-gray-600 text-white focus:border-amber-400" {...register("subject")} />
                  {errors.subject && <p className="text-red-400 text-sm mt-1">{errors.subject.message}</p>}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-white">Message</Label>
                  <Textarea id="message" placeholder="Your Message" className="bg-gray-700 border-gray-600 text-white min-h-[120px] focus:border-amber-400" {...register("message")} />
                  {errors.message && <p className="text-red-400 text-sm mt-1">{errors.message.message}</p>}
                </div>

                <Button type="submit" className="bg-amber-400 hover:bg-amber-500 text-black font-medium w-full" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    "Send Message"
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
