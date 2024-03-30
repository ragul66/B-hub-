import React from "react";

export default function Map() {
  return (
    <div className="justify-center flex pt-12 flex-col h-screen items-center">
      <h2 className="text-[150px] font-primary text-center">Locate Us on</h2>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d314.99479642412126!2d78.12178557914075!3d9.891768925233931!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2sin!4v1710432203359!5m2!1sen!2sin"
        className="size-[600px] rounded-full"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}
