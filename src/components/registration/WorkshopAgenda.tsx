import {
  BookOpen,
  AlertCircle,
  FileText,
  MessageSquare,
  Clock,
} from "lucide-react";

export default function WorkshopAgenda() {
  return (
    <div className="bg-purple-50 rounded-xl p-8 w-full max-w-xl">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-2xl font-semibold text-gray-800">
          Workshop Agenda
        </h3>
        <Clock className="h-5 w-5 text-purple-600" />
      </div>

      <div className="space-y-6">
        <div className="flex gap-4">
          <div className="flex-shrink-0 mt-1">
            <BookOpen className="h-5 w-5 text-blue-600" />
          </div>
          <div>
            <h4 className="font-medium text-gray-800">1. Introduction</h4>
            <p className="text-sm text-gray-600">
              Overview of the workshop objectives and expected outcomes
            </p>
          </div>
        </div>

        <div className="flex gap-4">
          <div className="flex-shrink-0 mt-1">
            <AlertCircle className="h-5 w-5 text-red-600" />
          </div>
          <div>
            <h4 className="font-medium text-gray-800">
              2. Why Traditional Workflow Doesn't Work
            </h4>
            <p className="text-sm text-gray-600">
              Understanding the limitations and challenges of conventional
              approaches
            </p>
          </div>
        </div>

        <div className="flex gap-4">
          <div className="flex-shrink-0 mt-1">
            <FileText className="h-5 w-5 text-yellow-600" />
          </div>
          <div>
            <h4 className="font-medium text-gray-800">3. Ground Rules</h4>
            <p className="text-sm text-gray-600">
              Establishing guidelines and best practices for effective
              collaboration
            </p>
          </div>
        </div>

        <div className="flex gap-4">
          <div className="flex-shrink-0 mt-1">
            <div className="h-5 w-5 bg-green-100 rounded-full flex items-center justify-center">
              <div className="h-3 w-3 bg-green-600 rounded-full"></div>
            </div>
          </div>
          <div>
            <h4 className="font-medium text-gray-800">4. Modern Workflow</h4>
            <p className="text-sm text-gray-600">
              Exploring contemporary solutions and innovative methodologies
            </p>
          </div>
        </div>

        <div className="flex gap-4">
          <div className="flex-shrink-0 mt-1">
            <MessageSquare className="h-5 w-5 text-purple-600" />
          </div>
          <div>
            <h4 className="font-medium text-gray-800">5. Q&A</h4>
            <p className="text-sm text-gray-600">
              Interactive discussion and addressing participant questions
            </p>
          </div>
        </div>
      </div>

      <div className="mt-8 pt-6 border-t border-purple-200">
        <p className="text-sm text-purple-700 text-center">
          Each session includes interactive discussions and hands-on exercises
        </p>
      </div>
    </div>
  );
}
