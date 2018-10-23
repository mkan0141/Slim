import * as React from 'react';
import * as ReactDOM from 'react-dom';

import MenueButton from './component/MenuButton';

export class App extends React.Component<{}> {
    render(){
        return (
            <div className='name'>
                <MenueButton></MenueButton>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById("root"));
