import './App.css';
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';
import ContentFooter from './components/ContentFooter';
import {TodoProvider} from './contexts/TodoContext';


function App() {
  return (
    <TodoProvider>
    <section className="todoapp">
      <Header />  
      <Content />
      <ContentFooter />
      <Footer />  
    </section>
    </TodoProvider>
  );
}

export default App;
