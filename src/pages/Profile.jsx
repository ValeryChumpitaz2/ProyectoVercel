function Profile() {

  return (

    <div className="min-h-screen bg-orange-50 px-6 md:px-16 py-16">

      <div className="max-w-3xl mx-auto bg-white rounded-3xl shadow-xl p-10">

        <div className="flex flex-col md:flex-row items-center gap-8">

          <img
            src="https://i.pravatar.cc/200"
            alt="Profile"
            className="w-40 h-40 rounded-full object-cover"
          />

          <div>

            <h1 className="text-4xl font-bold mb-3">
              Valery
            </h1>

            <p className="text-gray-600 mb-4">
              Food lover & healthy recipes explorer.
            </p>

            <div className="flex gap-6 flex-wrap">

              <div>
                <h2 className="text-2xl font-bold text-orange-500">
                  25
                </h2>
                <p className="text-gray-600">
                  Favoritos
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-orange-500">
                  12
                </h2>
                <p className="text-gray-600">
                  Menús
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>

    </div>

  );
}

export default Profile;