/*
  # Initial Database Schema

  1. New Tables
    - users
    - appointments
    - medical_records
    - prescriptions
    - emergency_contacts
    - chat_history

  2. Security
    - Enable RLS on all tables
    - Add policies for authenticated users
*/

-- Users table with additional medical information
CREATE TABLE IF NOT EXISTS users (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text UNIQUE NOT NULL,
  full_name text NOT NULL,
  phone text,
  date_of_birth date,
  blood_group text,
  medical_conditions text[],
  allergies text[],
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Appointments table
CREATE TABLE IF NOT EXISTS appointments (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES users(id),
  service_type text NOT NULL,
  appointment_date timestamptz NOT NULL,
  status text DEFAULT 'pending',
  notes text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Medical Records
CREATE TABLE IF NOT EXISTS medical_records (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES users(id),
  record_type text NOT NULL,
  record_date date NOT NULL,
  diagnosis text,
  treatment text,
  doctor_name text,
  attachments text[],
  created_at timestamptz DEFAULT now()
);

-- Prescriptions
CREATE TABLE IF NOT EXISTS prescriptions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES users(id),
  doctor_name text NOT NULL,
  prescription_date date NOT NULL,
  medications jsonb NOT NULL,
  instructions text,
  status text DEFAULT 'active',
  created_at timestamptz DEFAULT now()
);

-- Emergency Contacts
CREATE TABLE IF NOT EXISTS emergency_contacts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES users(id),
  name text NOT NULL,
  relationship text NOT NULL,
  phone text NOT NULL,
  created_at timestamptz DEFAULT now()
);

-- Chat History
CREATE TABLE IF NOT EXISTS chat_history (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES users(id),
  message text NOT NULL,
  is_bot boolean DEFAULT false,
  created_at timestamptz DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE users ENABLE ROW LEVEL SECURITY;
ALTER TABLE appointments ENABLE ROW LEVEL SECURITY;
ALTER TABLE medical_records ENABLE ROW LEVEL SECURITY;
ALTER TABLE prescriptions ENABLE ROW LEVEL SECURITY;
ALTER TABLE emergency_contacts ENABLE ROW LEVEL SECURITY;
ALTER TABLE chat_history ENABLE ROW LEVEL SECURITY;

-- Create policies
CREATE POLICY "Users can view own data" ON users
  FOR SELECT USING (auth.uid() = id);

CREATE POLICY "Users can view own appointments" ON appointments
  FOR ALL USING (auth.uid() = user_id);

CREATE POLICY "Users can view own medical records" ON medical_records
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can view own prescriptions" ON prescriptions
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can manage own emergency contacts" ON emergency_contacts
  FOR ALL USING (auth.uid() = user_id);

CREATE POLICY "Users can view own chat history" ON chat_history
  FOR ALL USING (auth.uid() = user_id);