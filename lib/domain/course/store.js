const courseFixtures = {
  1: {
    id: 1,
    title: 'course num 1',
    description: 'whatever 1'
  },
  2: {
    id: 2,
    title: 'course num 2',
    description: 'whatever 2'
  }
};

export const getCourse = (id) => courseFixtures[id];
export const getCourses = () => Object.keys(courseFixtures).map(key => courseFixtures[key]);