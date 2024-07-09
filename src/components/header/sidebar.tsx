import React from "react";
import {
    Grid,
    GridColumn,
    Icon,
    Menu,
    MenuItem,
    Segment,
    Sidebar,
    SidebarPushable,
    SidebarPusher,
    Header
} from "semantic-ui-react";
import styles from './header.module.css';

const HeaderSidebar = () => {
    const [visible, setVisible] = React.useState(true)

    return (
        <div className={styles.hamburger}>
            <div>
                <Icon
                    name="align justify"
                    size="large"
                    onChange={(e, data) => setVisible(data.checked)}
                    style={{display: visible ? 'block' : 'none'}}
                />
            </div>

            <div>
                <SidebarPushable as={Segment}>
                    <Sidebar
                        as={Menu}
                        animation='overlay'
                        icon='labeled'
                        inverted
                        onHide={() => setVisible(false)}
                        vertical
                        visible={visible}
                        width='thin'
                    >
                        <MenuItem as='a'>
                            <Icon name='home'/>
                            Home
                        </MenuItem>
                        <MenuItem as='a'>
                            <Icon name='gamepad'/>
                            Games
                        </MenuItem>
                        <MenuItem as='a'>
                            <Icon name='camera'/>
                            Channels
                        </MenuItem>
                    </Sidebar>

                    <SidebarPusher>

                    </SidebarPusher>
                </SidebarPushable>
            </div>
        </div>
    )
}

export default HeaderSidebar;
