type Props = {
  disease: string;
  confidence: number;
  treatment: string;
  prevention: string;
};

export default function PredictionCard({
  disease,
  confidence,
  treatment,
  prevention,
}: Props) {
  return (
    <div className="bg-white rounded-3xl shadow-xl p-6 mt-8">

      <h2 className="text-2xl font-bold text-green-700">
        Prediction Result
      </h2>

      <div className="mt-5">

        <p className="text-lg">
          Disease:
          <span className="font-bold ml-2">
            {disease}
          </span>
        </p>

        <p className="mt-3">
          Confidence:
          <span className="font-bold text-green-600 ml-2">
            {confidence}%
          </span>
        </p>

      </div>

      <div className="mt-8">

        <h3 className="font-bold text-xl">
          💊 Treatment
        </h3>

        <p className="mt-2 text-gray-700">
          {treatment}
        </p>

      </div>

      <div className="mt-8">

        <h3 className="font-bold text-xl">
          🛡 Prevention
        </h3>

        <p className="mt-2 text-gray-700">
          {prevention}
        </p>

      </div>

    </div>
  );
}
