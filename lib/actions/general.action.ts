import { db } from "@/firebase/admin";

/* ---------------- GET INTERVIEW BY ID ---------------- */

export async function getInterviewById(id: string): Promise<Interview | null> {
  const doc = await db.collection("interviews").doc(id).get();

  if (!doc.exists) return null;

  return {
    id: doc.id,
    ...doc.data(),
  } as Interview;
}

/* ---------------- USER INTERVIEWS ---------------- */

export async function getInterviewsByUserId(
  userId: string
): Promise<Interview[]> {
  try {
    const snapshot = await db
      .collection("interviews")
      .where("userId", "==", userId)
      .orderBy("createdAt", "desc")
      .get();

    if (snapshot.empty) return [];

    return snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    })) as Interview[];
  } catch (error) {
    console.error("Error fetching interviews:", error);
    return [];
  }
}

/* ---------------- LATEST INTERVIEWS ---------------- */

export async function getLatestInterviews(
  params: GetLatestInterviewsParams
): Promise<Interview[]> {
  const { userId, limit } = params;

  const snapshot = await db
    .collection("interviews")
    .where("finalized", "==", true)
    .where("userId", "==", userId)
    .orderBy("createdAt", "desc")
    .limit(limit ?? 10)
    .get();

  if (snapshot.empty) return [];

  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  })) as Interview[];
}
