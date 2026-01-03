import React from 'react';

export interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: string;
  image: string;
  tags: string[];
}

export interface Feature {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  rating: number;
  avatar: string;
}