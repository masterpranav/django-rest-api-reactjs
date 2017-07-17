var React = require('react');
var ReactDOM = require('react-dom');

class BooksList extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
		data: []
		}

	}
	loadBooksFromServer() {
		console.log(this.props.url);
		$.ajax({
			url: this.props.url,
			datatype: 'json',
			cache: false,
			success: function(data) {
				this.setState({data: data});
			}.bind(this)
		})
	}

	
	componentDidMount() {
		this.loadBooksFromServer();
		// setInterval(this.loadBooksFromServer, this.props.pollInterval)
	}

	render() {
		if (this.state.data) {
			console.log('DATA!')
			var bookNodes = this.state.data.map(function(book) {
				return (
					<div key={book.title}>
						<li> {book.title} </li>
						<li> {book.author} </li>
					</div>	
				)

			})
		}
		return (
			<div key={bookNodes}>
				<h1>Hello React!</h1>
				<ul >
					{bookNodes}
				</ul>
			</div>		
		)
	}
}

// class Hello extends React.Component {

// 	render() {
// 		var num =1;
// 		return (

// 			<div>
// 				<h1>{num}</h1>
// 				<h1>{this.props.name}</h1>
// 			</div>	
// 		)
// 	}
// }

ReactDOM.render(<BooksList url='/api/'  />,
document.getElementById('container'))