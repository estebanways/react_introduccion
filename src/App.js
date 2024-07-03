import './App.css';
import Counter from './Counter';
import { useEffect, useState } from 'react';
import Card from './Card';

/* 
 * General description:
 * This component, updates every time that the page
 * is loaded or reloaded, because it uses a variable
 * of the type useState. The React's virtual DOM
 * notices the change and updates them in the DOM. The
 * component just displays information, one card per
 * course.
 *
 */
function App() {

  const API_URL = 'https://larnu-dev-upy5mhs63a-rj.a.run.app/api/v1/categories';

  const [courses, updateCourses] = useState([]);

/*
 * API functions
 */

  function getCoursesApi() {
    return new Promise((resolve, reject) => {
      fetch(API_URL)
        .then((response) => response.json())
        .then((data) => {
          resolve(data.communityCategories);
        })
    });
  }

  /*
   * updateCourses(courses) updates the event of
   * courses.
   */
  async function getCourses() {
    const courses = await getCoursesApi();
    console.log(courses);
    updateCourses(courses);
  }

  /* 
   * Retrieves content from API
   */
  useEffect(() => {
    console.log('Hi 2, consume an API');
    getCourses();
  }, []);

  /*
  * Iterates courses
  */
  return (
    <div className="App">
      <header className="App-header">
        <div className='cards'>
        {
          courses.map(course => {
            return <div key={course.id}>
              <Card
                name={courses.name}
                icon={course.icon}
                users={course.users}
                background={course.background}
                totalQuizzes={course.totalQuizzes}
                key={course.id}
              />
              <br />
            </div>
          })
        }
        <Counter/>
        </div>
      </header>
    </div>
  );
}

export default App;
