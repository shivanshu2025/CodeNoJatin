export default function ContactSection() {
  return (
    <section className="space-y-4">
      <p className="text-xs font-medium uppercase tracking-widest text-gray-400">
        Get In Touch
      </p>

      <div className="space-y-1.5 text-gray-700">
        <p>
          You can reach me anytime at{" "}
          <span className="font-medium text-gray-900 relative inline-block
            after:content-[''] after:absolute after:left-1/2 after:-bottom-1 after:h-[2px]
            after:w-0 after:bg-gray-900 after:transition-all after:duration-300
            hover:after:w-full hover:after:left-0">
            2vshivansu@gmail.com
          </span>
        </p>

        <p>
          Or book a call on{" "}
          <span className="font-medium text-gray-900 relative inline-block
            after:content-[''] after:absolute after:left-1/2 after:-bottom-1 after:h-[2px]
            after:w-0 after:bg-gray-900 after:transition-all after:duration-300
            hover:after:w-full hover:after:left-0">
            9760926682
          </span>
        </p>
      </div>
    </section>
  );
}