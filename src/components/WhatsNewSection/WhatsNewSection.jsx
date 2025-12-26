export default function WhatsNewSection() {
  const images = [
    {
      id: 1,
      src: "ThemePictures/whats1.jpeg",
      alt: "Fashion watch with summer outfit"
    },
    {
      id: 2,
      src: "ThemePictures/whats2.jpeg",
      alt: "Classic watch with green sweater"
    },
    {
      id: 3,
      src: "ThemePictures/whats3.jpeg",
      alt: "Rose gold watch on marble"
    }
  ];

  return (
    <section className="w-full bg-[#0a2540] py-12 md:py-16 lg:py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 md:mb-12 lg:mb-16">
          <p className="text-white text-xs md:text-sm font-medium tracking-widest uppercase mb-2 md:mb-3">
            What's New
          </p>
          <h2 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4">
            WHAT ARE YOU LOOKING FOR?
          </h2>
          <p className="text-gray-300 text-sm md:text-base max-w-2xl mx-auto">
            Head out of town in the label's new easy, vacation-ready styles.
          </p>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {images.map((image) => (
            <div
              key={image.id}
              className="relative overflow-hidden rounded-lg aspect-square group cursor-pointer"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}