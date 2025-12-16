export default function HomePage() {
  return (
    <main className="max-w-6xl mx-auto px-6">
      <section className="min-h-[70vh] flex flex-col justify-center gap-6">
        <h1 className="text-5xl font-bold">
          Import Vehicles to Sri Lanka —{" "}
          <span className="text-[#FE7743]">Transparently & Affordably</span>
        </h1>

        <p className="text-gray-300 max-w-2xl">
          ClearDrive.lk is an IIT university project simplifying Japanese vehicle
          imports with transparency, security, and tracking.
        </p>

        <a
          href="https://forms.gle/MbQyLqrmsEXZLKXL8"
          target="_blank"
          className="bg-[#FE7743] text-black px-6 py-3 rounded-xl font-semibold w-fit"
        >
          Join Early Access
        </a>
      </section>

      <section className="mt-20 grid md:grid-cols-4 gap-6 text-gray-300">
        <div>High prices</div>
        <div>Hidden costs</div>
        <div>Fake auction grades</div>
        <div>No transparency</div>
      </section>

      <section className="mt-20 grid md:grid-cols-4 gap-6">
        <div className="border border-gray-800 p-4 rounded-xl">
          Direct auction access
        </div>
        <div className="border border-gray-800 p-4 rounded-xl">
          Clear cost breakdown
        </div>
        <div className="border border-gray-800 p-4 rounded-xl">
          Secure KYC
        </div>
        <div className="border border-gray-800 p-4 rounded-xl">
          Shipment tracking
        </div>
      </section>
    </main>
  );
}
