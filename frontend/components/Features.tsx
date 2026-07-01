const features = [
  {
    title: "AI Disease Detection",
    desc: "Detect crop diseases instantly using Deep Learning.",
    icon: "🧠",
  },
  {
    title: "High Accuracy",
    desc: "Powered by MobileNetV2 trained on thousands of crop images.",
    icon: "🎯",
  },
  {
    title: "Treatment Guide",
    desc: "Receive treatment suggestions and prevention tips.",
    icon: "💊",
  },
  {
    title: "Farmer Friendly",
    desc: "Simple interface designed for mobile devices.",
    icon: "🌱",
  },
];

export default function Features() {
  return (
    <section className="py-24 px-6 bg-white">

      <h2 className="text-4xl font-bold text-center text-green-700 mb-14">
        Why Choose AgriVision AI?
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">

        {features.map((feature, index) => (

          <div
            key={index}
            className="bg-green-50 rounded-3xl shadow-lg p-8 hover:scale-105 transition-all duration-300"
          >

            <div className="text-5xl mb-5">
              {feature.icon}
            </div>

            <h3 className="text-2xl font-bold mb-3">
              {feature.title}
            </h3>

            <p className="text-gray-600">
              {feature.desc}
            </p>

          </div>

        ))}

      </div>

    </section>
  );
}
