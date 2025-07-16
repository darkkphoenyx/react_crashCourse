import { createContext, ReactNode, useContext, useState } from "react";

interface IBucketList {
  bucketName: string;
  updateBucketName: (bucketName: string) => void;
}

const BucketList = createContext<IBucketList | undefined>({
  bucketName: "Chicken bucket",
  updateBucketName: () => {},
});

// const BucketList = createContext<IBucketList | undefined>(undefined);

interface IBucketListProps {
  children: ReactNode;
}

export const BucketListProvider = ({ children }: IBucketListProps) => {
  const [bucketName, setBucketName] = useState("Chicken bucket");

  const updateBucketName = (bucketName: string) => {
    setBucketName(bucketName);
  };
  return (
    <BucketList.Provider value={{ bucketName, updateBucketName }}>
      {children}
    </BucketList.Provider>
  );
};

export const useBucket = () => {
  const bucketContext = useContext(BucketList);
  if (!bucketContext)
    throw new Error("useBucket should have a BucketListProvider ");
  return bucketContext;
};

//new context API
interface WeaponContextType {
  weaponName: string;
  updateWeaponName: (weapon: string) => void;
  selectWeapon: (weaponName: string) => void;
}

const Weapon = createContext<WeaponContextType | undefined>({
  weaponName: "M416",
  selectWeapon: () => {},
  updateWeaponName: () => {},
});

interface WeaponProviderProps {
  children: ReactNode;
}

export const WeaponProvider = ({ children }: WeaponProviderProps) => {
  const [weaponName, setWeaponName] = useState("M416");

  const selectWeapon = (weaponName: string) => {
    console.log("weapon selected: ", weaponName);
  };

  const updateWeaponName = (weapon: string) => {
    setWeaponName(weapon);
  };

  return (
    <Weapon.Provider value={{ selectWeapon, updateWeaponName, weaponName }}>
      {children}
    </Weapon.Provider>
  );
};

export const useWeapon = () => {
  const weaponContext = useContext(Weapon);
  if (!weaponContext) {
    throw new Error("useWeapon context");
  }
  return weaponContext;
};
