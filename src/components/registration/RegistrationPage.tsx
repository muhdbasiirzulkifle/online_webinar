import RegistrationForm from "./RegistrationForm";
import WorkshopAgenda from "./WorkshopAgenda";

export default function RegistrationPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <RegistrationForm />
          </div>
          <div>
            <WorkshopAgenda />
          </div>
        </div>
        <div className="text-center text-gray-400 text-sm mt-12">
          © 2025 DH DigiLab. All rights reserved.
        </div>
      </div>
    </div>
  );
}
