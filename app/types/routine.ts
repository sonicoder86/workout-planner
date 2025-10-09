export type Routine = {
  id: number,
  name: string,
  image: string,
  workouts: Workout[],
}

export type Workout = {
  id: number;
  name: string;
  exercises: Exercise[];
}

export type Exercise = {
  id: number;
  name: string;
  sets: number;
  reps: number;
  one_rm: number;
  rpe: number;
  rest: number;
}

export const routines: Routine[] = [
  {
    id: 1,
    name: 'Powerbuilding',
    image: 'https://cdn.shopify.com/s/files/1/0630/1794/3286/files/Program-Cover-e1602266470895-792x1024.png',
    workouts: [
      {
        id: 1,
        name: 'Full Body 1: Squat, OHP',
        exercises: [
          { id: 1, name: 'Squat', sets: 1, reps: 5, one_rm: 80, rpe: 7.5, rest: 4 },
          { id: 2, name: 'Squat', sets: 2, reps: 8, one_rm: 70, rpe: 0, rest: 3 },
          { id: 3, name: 'Overhead Press', sets: 3, reps: 8, one_rm: 70, rpe: 0, rest: 3 },
          { id: 4, name: 'Glute Ham Raise', sets: 3, reps: 10, one_rm: 0, rpe: 7, rest: 2 },
          { id: 5, name: 'Helms Row', sets: 3, reps: 12, one_rm: 0, rpe: 9, rest: 2 },
          { id: 6, name: 'Hammer Curl', sets: 3, reps: 12, one_rm: 0, rpe: 10, rest: 2 },
        ],
      },
      {
        id: 2,
        name: 'Full Body 2: Deadlift, Bench Press',
        exercises: [
          { id: 1, name: 'Deadlift', sets: 3, reps: 4, one_rm: 80, rpe: 7.5, rest: 4 },
          { id: 2, name: 'Bench Press', sets: 1, reps: 3, one_rm: 85, rpe: 0, rest: 3 },
          { id: 3, name: 'Bench Press', sets: 2, reps: 10, one_rm: 60, rpe: 0, rest: 3 },
          { id: 4, name: 'Hip Abduction', sets: 3, reps: 15, one_rm: 0, rpe: 7, rest: 2 },
          { id: 5, name: 'Weighted Pull Up', sets: 3, reps: 6, one_rm: 0, rpe: 9, rest: 2 },
          { id: 6, name: 'Skull Crusher', sets: 3, reps: 12, one_rm: 0, rpe: 10, rest: 2 },
          { id: 7, name: 'Calf Raise', sets: 3, reps: 10, one_rm: 0, rpe: 10, rest: 2 },
        ],
      },
    ],
  },
  {
    id: 2,
    name: 'The Bodybuilding Transformation System',
    image: 'https://jeffnippard.com/cdn/shop/files/ProgramCover.png?&width=300',
    workouts: [],
  },
  {
    id: 3,
    name: 'The Ultimate Push Pull Legs System',
    image: 'https://jeffnippard.com/cdn/shop/products/TUPPLS_Cover_Final.png?&width=700',
    workouts: [],
  },
];