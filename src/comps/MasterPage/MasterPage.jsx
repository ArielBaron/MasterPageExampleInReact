import "./MasterPage.css";

function MasterPage(props) {
    const { title, firstContent, secondContent, setCurrentPage, backgroundColor } = props;
    document.body.style.backgroundColor = backgroundColor;
    return (
        <div>
            <h1>{title}</h1>
            <h1>By Ariel Baron</h1>
            <main>
                <span   id="first-content">{firstContent}</span> 
                <span   id="second-content">{secondContent}</span>
            </main>
            <footer>
                <hr />
                <a href="#" onClick={() => setCurrentPage("page1")}>Page 1</a>
                {" | "}
                <a href="#" onClick={() => setCurrentPage("page2")}>Page 2</a>
            </footer>
        </div>
    );
}

export default MasterPage;
