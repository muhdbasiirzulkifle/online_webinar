import { useState, FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CheckCircle } from "lucide-react";

type FormStep = "personal" | "workshop" | "confirmation";

export default function RegistrationForm() {
  const [currentStep, setCurrentStep] = useState<FormStep>("personal");
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    university: "",
    graduationYear: "",
    workshop: "",
    experienceLevel: "",
    specialRequirements: "",
    termsAccepted: false,
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormData((prev) => ({ ...prev, [name]: checked }));
  };

  const validatePersonalStep = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.fullName.trim()) newErrors.fullName = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }
    if (!formData.university.trim())
      newErrors.university = "University is required";
    if (!formData.graduationYear)
      newErrors.graduationYear = "Graduation year is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateWorkshopStep = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.workshop)
      newErrors.workshop = "Workshop selection is required";
    if (!formData.experienceLevel)
      newErrors.experienceLevel = "Experience level is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNextStep = () => {
    if (currentStep === "personal") {
      if (validatePersonalStep()) setCurrentStep("workshop");
    } else if (currentStep === "workshop") {
      if (validateWorkshopStep()) setCurrentStep("confirmation");
    }
  };

  const handlePrevStep = () => {
    if (currentStep === "workshop") setCurrentStep("personal");
    else if (currentStep === "confirmation") setCurrentStep("workshop");
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (!formData.termsAccepted) {
      setErrors({ terms: "You must accept the terms and conditions" });
      return;
    }

    // Here you would typically send the data to your backend
    console.log("Form submitted:", formData);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-3xl mx-auto text-center">
        <div className="flex justify-center mb-6">
          <CheckCircle className="h-16 w-16 text-green-500" />
        </div>
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          Registration Complete!
        </h2>
        <p className="text-gray-600 mb-6">
          Thank you for registering for our workshop. We've sent a confirmation
          email to {formData.email} with all the details.
        </p>
        <p className="text-gray-600 mb-8">
          Please check your inbox and follow the verification instructions to
          confirm your spot.
        </p>
        <Button
          onClick={() => setIsSubmitted(false)}
          className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-md"
        >
          Register for Another Workshop
        </Button>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-3xl mx-auto">
      <div className="mb-8">
        <div className="flex items-center justify-center mb-2">
          <span className="text-xs bg-purple-100 text-purple-800 py-1 px-3 rounded-full font-medium">
            Limited Spots Available
          </span>
        </div>
        <h2 className="text-4xl font-bold text-center text-purple-600 mb-1">
          Join Our Workshop
        </h2>
        <p className="text-center text-gray-500">
          Registration is now open. Sign up today!
        </p>
      </div>

      {/* Progress Steps */}
      <div className="flex justify-between items-center mb-8 relative">
        <div className="absolute left-0 right-0 top-1/2 h-0.5 bg-gray-200 -z-10"></div>

        <div className="flex flex-col items-center">
          <div
            className={`w-10 h-10 rounded-full flex items-center justify-center ${currentStep === "personal" ? "bg-purple-600 text-white" : "bg-white text-purple-600 border-2 border-purple-600"}`}
          >
            1
          </div>
          <span className="text-sm mt-2 text-gray-600">Personal Info</span>
        </div>

        <div className="flex flex-col items-center">
          <div
            className={`w-10 h-10 rounded-full flex items-center justify-center ${currentStep === "workshop" ? "bg-purple-600 text-white" : "bg-white text-gray-400 border-2 border-gray-200"}`}
          >
            2
          </div>
          <span className="text-sm mt-2 text-gray-600">Workshop Selection</span>
        </div>

        <div className="flex flex-col items-center">
          <div
            className={`w-10 h-10 rounded-full flex items-center justify-center ${currentStep === "confirmation" ? "bg-purple-600 text-white" : "bg-white text-gray-400 border-2 border-gray-200"}`}
          >
            3
          </div>
          <span className="text-sm mt-2 text-gray-600">Confirmation</span>
        </div>
      </div>

      {/* Form Content */}
      {currentStep === "personal" && (
        <div>
          <h3 className="text-xl font-medium mb-6">Personal Information</h3>
          <div className="space-y-4">
            <div>
              <Input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                placeholder="Full Name *"
                className={`w-full p-3 border rounded-md ${errors.fullName ? "border-red-500" : ""}`}
              />
              {errors.fullName && (
                <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>
              )}
            </div>
            <div>
              <Input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Email Address *"
                className={`w-full p-3 border rounded-md ${errors.email ? "border-red-500" : ""}`}
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
              )}
            </div>
            <div>
              <Input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="Phone Number"
                className="w-full p-3 border rounded-md"
              />
            </div>
            <div>
              <Input
                type="text"
                name="university"
                value={formData.university}
                onChange={handleInputChange}
                placeholder="University Name *"
                className={`w-full p-3 border rounded-md ${errors.university ? "border-red-500" : ""}`}
              />
              {errors.university && (
                <p className="text-red-500 text-sm mt-1">{errors.university}</p>
              )}
            </div>
            <div>
              <select
                name="graduationYear"
                value={formData.graduationYear}
                onChange={handleInputChange}
                className={`w-full p-3 border rounded-md bg-white ${errors.graduationYear ? "border-red-500" : ""}`}
              >
                <option value="" disabled>
                  Expected Graduation Year *
                </option>
                <option value="2024">2024</option>
                <option value="2025">2025</option>
                <option value="2026">2026</option>
                <option value="2027">2027</option>
                <option value="2028">2028</option>
              </select>
              {errors.graduationYear && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.graduationYear}
                </p>
              )}
            </div>
          </div>
          <div className="mt-6 flex justify-end">
            <Button
              onClick={handleNextStep}
              className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-md flex items-center"
            >
              Next Step
              <span className="ml-2">→</span>
            </Button>
          </div>
        </div>
      )}

      {currentStep === "workshop" && (
        <div>
          <h3 className="text-xl font-medium mb-6">Workshop Selection</h3>
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Select Workshop
              </label>
              <select
                name="workshop"
                value={formData.workshop}
                onChange={handleInputChange}
                className={`w-full p-3 border rounded-md bg-white ${errors.workshop ? "border-red-500" : ""}`}
              >
                <option value="" disabled>
                  Choose a workshop
                </option>
                <option value="web-dev">Web Development Fundamentals</option>
                <option value="data-science">Data Science with Python</option>
                <option value="cloud">Cloud Architecture Workshop</option>
                <option value="mobile">Mobile App Development</option>
                <option value="ai">AI & Machine Learning Basics</option>
              </select>
              {errors.workshop && (
                <p className="text-red-500 text-sm mt-1">{errors.workshop}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Experience Level
              </label>
              <div className="space-y-2">
                <div className="flex items-center">
                  <input
                    type="radio"
                    id="beginner"
                    name="experienceLevel"
                    value="beginner"
                    checked={formData.experienceLevel === "beginner"}
                    onChange={handleInputChange}
                    className="h-4 w-4 text-purple-600"
                  />
                  <label htmlFor="beginner" className="ml-2 text-gray-700">
                    Beginner - No prior experience
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    type="radio"
                    id="intermediate"
                    name="experienceLevel"
                    value="intermediate"
                    checked={formData.experienceLevel === "intermediate"}
                    onChange={handleInputChange}
                    className="h-4 w-4 text-purple-600"
                  />
                  <label htmlFor="intermediate" className="ml-2 text-gray-700">
                    Intermediate - Some experience
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    type="radio"
                    id="advanced"
                    name="experienceLevel"
                    value="advanced"
                    checked={formData.experienceLevel === "advanced"}
                    onChange={handleInputChange}
                    className="h-4 w-4 text-purple-600"
                  />
                  <label htmlFor="advanced" className="ml-2 text-gray-700">
                    Advanced - Experienced practitioner
                  </label>
                </div>
              </div>
              {errors.experienceLevel && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.experienceLevel}
                </p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Special Requirements
              </label>
              <textarea
                name="specialRequirements"
                value={formData.specialRequirements}
                onChange={handleInputChange}
                placeholder="Any dietary restrictions, accessibility needs, or other requirements"
                className="w-full p-3 border rounded-md bg-white h-24"
              ></textarea>
            </div>
          </div>
          <div className="mt-6 flex justify-between">
            <Button
              onClick={handlePrevStep}
              variant="outline"
              className="border-purple-600 text-purple-600 hover:bg-purple-50 px-6 py-2 rounded-md"
            >
              Back
            </Button>
            <Button
              onClick={handleNextStep}
              className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-md flex items-center"
            >
              Next Step
              <span className="ml-2">→</span>
            </Button>
          </div>
        </div>
      )}

      {currentStep === "confirmation" && (
        <div>
          <h3 className="text-xl font-medium mb-6">Confirmation</h3>
          <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 mb-6">
            <h4 className="font-medium text-lg mb-4 text-purple-600">
              Review Your Information
            </h4>

            <div className="space-y-4">
              <div>
                <h5 className="text-sm font-medium text-gray-500">
                  Personal Information
                </h5>
                <div className="grid grid-cols-2 gap-4 mt-2">
                  <div>
                    <p className="text-sm text-gray-500">Full Name</p>
                    <p className="font-medium">{formData.fullName}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Email</p>
                    <p className="font-medium">{formData.email}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Phone</p>
                    <p className="font-medium">
                      {formData.phone || "Not provided"}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">University</p>
                    <p className="font-medium">{formData.university}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Graduation Year</p>
                    <p className="font-medium">{formData.graduationYear}</p>
                  </div>
                </div>
              </div>

              <div className="border-t border-gray-200 pt-4">
                <h5 className="text-sm font-medium text-gray-500">
                  Workshop Details
                </h5>
                <div className="grid grid-cols-2 gap-4 mt-2">
                  <div>
                    <p className="text-sm text-gray-500">Selected Workshop</p>
                    <p className="font-medium">
                      {formData.workshop === "web-dev" &&
                        "Web Development Fundamentals"}
                      {formData.workshop === "data-science" &&
                        "Data Science with Python"}
                      {formData.workshop === "cloud" &&
                        "Cloud Architecture Workshop"}
                      {formData.workshop === "mobile" &&
                        "Mobile App Development"}
                      {formData.workshop === "ai" &&
                        "AI & Machine Learning Basics"}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Experience Level</p>
                    <p className="font-medium">
                      {formData.experienceLevel === "beginner" && "Beginner"}
                      {formData.experienceLevel === "intermediate" &&
                        "Intermediate"}
                      {formData.experienceLevel === "advanced" && "Advanced"}
                    </p>
                  </div>
                  <div className="col-span-2">
                    <p className="text-sm text-gray-500">
                      Special Requirements
                    </p>
                    <p className="font-medium">
                      {formData.specialRequirements || "None"}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-6">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="terms"
                name="termsAccepted"
                checked={formData.termsAccepted}
                onChange={handleCheckboxChange}
                className="h-4 w-4 text-purple-600"
              />
              <label htmlFor="terms" className="ml-2 text-gray-700 text-sm">
                I agree to the{" "}
                <a href="#" className="text-purple-600 hover:underline">
                  Terms and Conditions
                </a>{" "}
                and{" "}
                <a href="#" className="text-purple-600 hover:underline">
                  Privacy Policy
                </a>
              </label>
            </div>
            {errors.terms && (
              <p className="text-red-500 text-sm mt-1">{errors.terms}</p>
            )}
          </div>

          <div className="mt-6 flex justify-between">
            <Button
              onClick={handlePrevStep}
              variant="outline"
              className="border-purple-600 text-purple-600 hover:bg-purple-50 px-6 py-2 rounded-md"
            >
              Back
            </Button>
            <Button
              onClick={handleSubmit}
              className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-md"
            >
              Submit Registration
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
