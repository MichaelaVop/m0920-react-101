
console.log("category");
class Category extends React.Component {
    constructor() {
        super()
    }

    render() {
        const listData = data.map((result, index) => (
            <li className="cat-link left valign-wrapper" key={index.toString()}>
				<i className="material-icons">{result.icon}</i>{result.title}
			</li>
        ))
        return (
            <div className="row">
                <ul className="cat-nav center-align">
                    {listData}
                </ul>
            </div>
        )
    }
}
