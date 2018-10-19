import * as React from 'react';

interface MenueButtonProps{

}
export default class MenueButton extends React.Component<{}> {
    constructor(props: MenueButtonProps){
        super(props);
    }
    render() {
        return (
            <div className='menu-button'>
                <a className="menu-trigger" href="#">
                    <span></span>
                    <span></span>
                    <span></span>
                </a>
            </div>
        );
    }
}