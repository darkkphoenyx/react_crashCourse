import React, { useEffect, useState } from "react";
import { useWeapon, WeaponProvider } from "../context/BucketList";

const WeaponCard = () => {
  const { weaponName, updateWeaponName } = useWeapon();
  const [newWeapon, setNewWeapon] = useState(weaponName);

  useEffect(() => {
    updateWeaponName(newWeapon);
  }, [newWeapon]);

  return (
    <div>
      <div>Weapon Card</div>
      <h1>{weaponName}</h1>
      <input
        type="text"
        value={newWeapon}
        onChange={(e) => {
          setNewWeapon(e.target.value);
        }}
      />
    </div>
  );
};

export default WeaponCard;
