import { useState } from "react";
import yapeQR from "../assets/yape-qr.jpeg";
import confetti from "canvas-confetti";

function Donations() {
  const [name, setName] = useState("");
  const [feedback, setFeedback] = useState("");
  const [rating, setRating] = useState(5);
  const [comments, setComments] = useState([]);

  // 🎯 generar avatar automático
  const getAvatar = (name) =>
    `https://api.dicebear.com/7.x/initials/svg?seed=${name}`;

  const handleDonate = () => {
    if (!name || !feedback) return;

    const newComment = {
      id: Date.now(),
      name,
      feedback,
      rating,
      avatar: getAvatar(name),
    };

    setComments([newComment, ...comments]);

    // 🔊 sonido
    const audio = new Audio(paymentSound);
    audio.volume = 0.5;
    audio.play();

    // 🎉 confetti
    confetti({
      particleCount: 150,
      spread: 110,
      origin: { y: 0.6 },
      colors: ["#f97316", "#ffffff", "#22c55e"],
    });

    setName("");
    setFeedback("");
    setRating(5);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-100 to-orange-200 p-6">

      <div className="bg-white w-full max-w-5xl rounded-3xl shadow-2xl p-6 flex flex-col md:flex-row gap-6">

        {/* 💳 IZQUIERDA: QR */}
        <div className="flex-1 text-center">
          <h1 className="text-2xl font-bold text-orange-600">
            💰 Apoya SmartMeal
          </h1>

          <p className="text-gray-500 mb-4">
            Escanea y dona con Yape 🇵🇪
          </p>

          <img
            src={yapeQR}
            alt="QR Yape"
            className="w-56 mx-auto rounded-2xl shadow-lg border-2 border-orange-200"
          />

          <p className="text-xs text-gray-400 mt-3">
            Tu apoyo mejora la app 🚀
          </p>
        </div>

        {/* 💬 DERECHA: CHAT / FORM */}
        <div className="flex-1 bg-orange-50 rounded-2xl p-5">

          <h2 className="text-lg font-bold text-orange-700 mb-4">
            💬 Deja tu feedback
          </h2>

          {/* nombre */}
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Tu nombre"
            className="w-full mb-3 p-3 rounded-xl border focus:ring-2 focus:ring-orange-400 outline-none"
          />

          {/* estrellas */}
          <div className="mb-3">
            <p className="text-sm text-gray-600 mb-1">⭐ Calificación</p>
            <div className="flex gap-1">
              {[1, 2, 3, 4, 5].map((num) => (
                <button
                  key={num}
                  onClick={() => setRating(num)}
                  className={`text-xl ${
                    num <= rating ? "text-yellow-400" : "text-gray-300"
                  }`}
                >
                  ★
                </button>
              ))}
            </div>
          </div>

          {/* mensaje */}
          <textarea
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            placeholder="Ideas para mejorar la app..."
            className="w-full mb-3 p-3 rounded-xl border h-24 resize-none focus:ring-2 focus:ring-orange-400 outline-none"
          />

          {/* botón */}
          <button
            onClick={handleDonate}
            className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 rounded-2xl transition"
          >
            🚀 Enviar feedback
          </button>

          {/* 💬 CHAT / COMENTARIOS */}
          <div className="mt-6">
            <h3 className="text-sm font-bold text-orange-700 mb-3">
              💬 Comunidad
            </h3>

            <div className="space-y-3 max-h-72 overflow-y-auto">

              {comments.length === 0 ? (
                <p className="text-sm text-gray-500">
                  Aún no hay comentarios...
                </p>
              ) : (
                comments.map((c) => (
                  <div
                    key={c.id}
                    className="flex gap-3 bg-white p-3 rounded-xl shadow border"
                  >
                    {/* avatar */}
                    <img
                      src={c.avatar}
                      className="w-10 h-10 rounded-full border"
                    />

                    {/* contenido */}
                    <div className="flex-1">
                      <div className="flex justify-between items-center">
                        <p className="font-bold text-orange-600 text-sm">
                          {c.name}
                        </p>

                        <span className="text-yellow-400 text-sm">
                          {"★".repeat(c.rating)}
                        </span>
                      </div>

                      <p className="text-gray-600 text-sm">
                        {c.feedback}
                      </p>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Donations;