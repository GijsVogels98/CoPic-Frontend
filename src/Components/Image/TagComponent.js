import React from 'react';
import ReactDOM from 'react-dom';
import { WithContext as ReactTags } from 'react-tag-input';

const KeyCodes = {
    comma: 188,
    enter: 13,
};

const delimiters = [KeyCodes.comma, KeyCodes.enter];



class TagComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            tags: [
            ],
            suggestions: [
            ]
        };
        this.handleDelete = this.handleDelete.bind(this);
        this.handleAddition = this.handleAddition.bind(this);
        this.handleDrag = this.handleDrag.bind(this);
    }

    handleDelete(i) {
        const { tags } = this.state;
        this.setState({
            tags: tags.filter((tag, index) => index !== i),
        });
    }

    handleAddition(tag) {
        this.setState(state => ({ tags: [...state.tags, tag] }));


    }




    handleDrag(tag, currPos, newPos) {
        const tags = [...this.state.tags];
        const newTags = tags.slice();

        newTags.splice(currPos, 1);
        newTags.splice(newPos, 0, tag);

        // re-render
        this.setState({ tags: newTags });
    }

    render() {

        const { tags, suggestions } = this.state;

        const finalArray = tags.map((obj) =>{
            return obj.text;
        });


        let a = JSON.stringify(tags);

        console.log(finalArray)
        localStorage.setItem('tags', JSON.stringify(finalArray));

        return (
            <div>
                <ReactTags tags={tags}
                           suggestions={suggestions}
                           handleDelete={this.handleDelete}
                           handleAddition={this.handleAddition}
                           handleDrag={this.handleDrag}
                           delimiters={delimiters} />
            </div>
        )
    }
};

export default TagComponent;
// ReactDOM.render(<TagComponent/>, document.getElementById('app'));