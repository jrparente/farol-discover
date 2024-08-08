function SectionTestimonials2({ title }: { title: string }) {
  return (
    <section className="my-2 py-2">
      <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16">
        <h2 className="mt-10 scroll-m-20 pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
          {title}
        </h2>
      </div>
    </section>
  );
}

export default SectionTestimonials2;
