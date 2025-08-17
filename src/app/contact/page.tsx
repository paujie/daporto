"use client";

import { useState } from 'react';
import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { FiHome } from 'react-icons/fi';

export default function ContactPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('');

    if (!name || !email || !message) {
      setStatus('Error: Semua kolom wajib diisi!');
      return;
    }

    setStatus('Mengirim...');
    const formData = { name, email, message };

    try {
      const response = await fetch('https://formspree.io/f/xdkdvgyq', { 
        method: 'POST',
        body: JSON.stringify(formData),
        headers: { 'Accept': 'application/json' }
      });

      if (response.ok) {
        setStatus('Sukses: Pesan Anda telah terkirim!');
        setName('');
        setEmail('');
        setMessage('');
      } else {
        setStatus('Error: Gagal mengirim pesan. Silakan coba lagi.');
      }
    } catch (error) {
      setStatus('Error: Terjadi kesalahan. Silakan coba lagi.');
    }
  };

  if (status.startsWith('Sukses')) {
      return (
        <div className="container mx-auto px-4 py-16 text-center flex flex-col items-center">
            <h2 className="text-2xl font-bold">Terima kasih!</h2>
            <p className="mt-4 text-lg text-gray-700">{status.replace('Sukses: ', '')}</p>
            
            <div className="mt-8">
              <Link href="/" passHref>
                <Button variant="ghost">
                  <FiHome className="mr-2 h-4 w-4" />
                  Kembali ke Home
                </Button>
              </Link>
            </div>
        </div>
      );
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Hubungi Saya
        </h2>
        <p className="mt-4 text-lg text-muted-foreground">
          Punya pertanyaan atau ingin bekerja sama? Silakan isi form di bawah ini.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="max-w-xl mx-auto mt-12">
        <div className="space-y-6">
          <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="name">Nama Lengkap</Label>
            <Input id="name" type="text" value={name} onChange={(e) => setName(e.target.value)} />
          </div>
          <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="grid w-full gap-1.5">
            <Label htmlFor="message">Pesan</Label>
            <Textarea id="message" value={message} onChange={(e) => setMessage(e.target.value)} />
          </div>
        </div>
        <div className="mt-8">
          <Button type="submit" className="w-full" disabled={status === 'Mengirim...'}>
            {status === 'Mengirim...' ? 'Mengirim...' : 'Kirim Pesan'}
          </Button>
        </div>
        {status && !status.startsWith('Sukses') && <p className={`mt-4 text-center text-sm ${status.startsWith('Error') ? 'text-destructive' : 'text-muted-foreground'}`}>{status}</p>}
      </form>
      
      <div className="text-center mt-8">
        <Link href="/" passHref>
          <Button variant="ghost">
            <FiHome className="mr-2 h-4 w-4" />
            Kembali ke Home
          </Button>
        </Link>
      </div>
    </div>
  );
}