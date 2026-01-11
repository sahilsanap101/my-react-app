import Student from './Student.jsx'

function App() {
    return(
        <>
        <Student name="Spongebob" age={30} isStudent={true}/>
        <Student name="Patrick" age={42} isStudent={false}/>
        <Student name="Sahil" age={50} isStudent={false}/>
        <Student name="jagdish" age={19} isStudent={true}/>
        <Student name="Larry"/>
        
        </>
    );
}

export default App