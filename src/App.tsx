import './wdyr';

import './App.css';
// import ChatroomOptimizedReRender from './components/ChatroomOptimizedReRender';
// import ChatroomPartialReRender from './components/ChatroomPartialReRender'
import ChatroomFullReRender from './components/ChatroomFullReRender';

function App() {
  return (
    <ChatroomFullReRender />
  )
}
App.whyDidYouRender = true

export default App
