import React from 'react';

const PropertyDescription: React.FC = () => {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-[24px] leading-[28.8px] font-normal bg-gold bg-clip-text text-transparent">
        Description
      </h2>
      <p className="text-[#D1D1D6] text-[16px] leading-[17.6px] font-normal">
        A stunning home in the sought after 1 Steuart Lane, residence 1502
        features 2 bedrooms 2.5 bathrooms with breathtaking views, and beautiful
        upgrades by famed Bayon Design Studios! The floor to ceiling expansive
        windows offer sweeping views of the Bay Bridge, Rincon Park with Cupid's
        Span sculpture and the serene bay water. Exquisite finishes include
        European oak flooring, coved lighting, upgraded closet systems and
        automated shades, custom kitchen island, Dornbracht fixtures, Moltini
        cabinetry, Glorious white marble, Gaggenau and Miele appliances, wine
        cooler, and many more. Amenities comprise of a 24 hour fully staffed
        lobby, 24 hour valet parking, resident lounge with outdoor terrace,
        double gas BBQ, fitness studio with Technogym equipment and free
        weights, yoga studio with pilates reformer, and pilates, sauna, steam
        room, outdoor spa, just to name a few. Located along the Embarcaderao
        and convenient access to Michelin starred restaurants, luxury retailers,
        iconic landmarks, and local sports and entertainment venues.
      </p>
    </div>
  );
};

export default PropertyDescription;
