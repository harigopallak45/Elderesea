import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/hooks/useAuth';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export function SignupPage() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    fullName: '',
    fatherName: '',
    dateOfBirth: '',
    bloodGroup: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    pincode: '',
    emergencyContact: '',
    emergencyRelation: '',
    medicalConditions: '',
    allergies: '',
  });

  const { signUp } = useAuth();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await signUp(formData.email, formData.password);
      // Store additional user data in Supabase
      const { data: { user } } = await supabase.auth.getUser();
      if (user) {
        await supabase.from('users').insert([
          {
            id: user.id,
            full_name: formData.fullName,
            father_name: formData.fatherName,
            date_of_birth: formData.dateOfBirth,
            blood_group: formData.bloodGroup,
            phone: formData.phone,
            address: formData.address,
            city: formData.city,
            state: formData.state,
            pincode: formData.pincode,
            emergency_contact: formData.emergencyContact,
            emergency_relation: formData.emergencyRelation,
            medical_conditions: formData.medicalConditions.split(','),
            allergies: formData.allergies.split(','),
          }
        ]);
      }
    } catch (error) {
      console.error('Signup error:', error);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-lg p-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
          Create Your Account
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Personal Information */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-800">Personal Information</h3>
              
              <div>
                <Label htmlFor="fullName">Full Name</Label>
                <Input
                  id="fullName"
                  name="fullName"
                  type="text"
                  required
                  className="w-full text-gray-900"
                  value={formData.fullName}
                  onChange={handleChange}
                />
              </div>

              <div>
                <Label htmlFor="fatherName">Father's Name</Label>
                <Input
                  id="fatherName"
                  name="fatherName"
                  type="text"
                  required
                  className="w-full text-gray-900"
                  value={formData.fatherName}
                  onChange={handleChange}
                />
              </div>

              <div>
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="w-full text-gray-900"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>

              <div>
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  required
                  className="w-full text-gray-900"
                  value={formData.password}
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* Medical Information */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-800">Medical Information</h3>
              
              <div>
                <Label htmlFor="bloodGroup">Blood Group</Label>
                <Input
                  id="bloodGroup"
                  name="bloodGroup"
                  type="text"
                  required
                  className="w-full text-gray-900"
                  value={formData.bloodGroup}
                  onChange={handleChange}
                />
              </div>

              <div>
                <Label htmlFor="medicalConditions">Medical Conditions (comma-separated)</Label>
                <Input
                  id="medicalConditions"
                  name="medicalConditions"
                  type="text"
                  className="w-full text-gray-900"
                  value={formData.medicalConditions}
                  onChange={handleChange}
                />
              </div>

              <div>
                <Label htmlFor="allergies">Allergies (comma-separated)</Label>
                <Input
                  id="allergies"
                  name="allergies"
                  type="text"
                  className="w-full text-gray-900"
                  value={formData.allergies}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>

          <Button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 py-3"
          >
            Create Account
          </Button>
        </form>

        <div className="text-center mt-4">
          <p className="text-sm text-gray-600">
            Already have an account?{' '}
            <Link to="/login" className="font-medium text-blue-600 hover:text-blue-500">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}