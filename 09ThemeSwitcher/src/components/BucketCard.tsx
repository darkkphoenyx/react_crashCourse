import { useEffect, useState } from "react";
import { BucketListProvider, useBucket } from "../context/BucketList";

const BucketCard = () => {
  const { bucketName, updateBucketName } = useBucket();
  const [newBucket, setNewBucket] = useState(bucketName);
  useEffect(() => {
    updateBucketName(newBucket);
  }, [newBucket]);

  return (
    <div>
      <BucketListProvider>
        <div>
          <h1>{bucketName}</h1>
          <input
            type="text"
            value={newBucket}
            onChange={(e) => setNewBucket(e.target.value)}
          />
        </div>
      </BucketListProvider>
    </div>
  );
};

export default BucketCard;
