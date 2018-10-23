import * as React from 'react';

interface MenuButtonProps{

}

interface MenuButtonState {
    is_open: boolean
}

export default class MenueButton extends React.Component<MenuButtonProps, MenuButtonState> {
    constructor(props: MenuButtonProps){
        super(props);
        this.state = {
            is_open: false,
        };

        this.menuClick = this.menuClick.bind(this);
    }

    menuClick() {
        console.log(this.state.is_open);
        this.setState({
            is_open: !this.state.is_open,
        });
    }

    isOpen(){
        return ['menu-trigger',
        this.state.is_open ? '' : 'menu-animation'].join(' ');
    }

    render() {
        return (
            <div className='menu-button'>
                <a className={this.state.is_open ? 'menu-trigger' : 'menu-trigger menu-animation'} onClick={this.menuClick} href="#">
                    <span></span>
                    <span></span>
                    <span></span>
                </a>
            </div>
        );
    }
}