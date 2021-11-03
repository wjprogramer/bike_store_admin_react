import React from 'react';
import {
    Container,
    Jumbotron,
    Button,
    Media,
    Nav, 
    NavItem, 
    NavLink,
    Dropdown,
    DropdownToggle,
    DropdownItem,
    DropdownMenu,
    UncontrolledDropdown,
} from '../../../components';
import {
  Spinner,
} from 'reactstrap';
import { HeaderMain } from "../../components/HeaderMain";
import { HeaderDemo } from "../../components/HeaderDemo";

import NavbarDemo1 from "./demo/NavbarDemo1";
import NavbarDemo2 from "./demo/NavbarDemo2";
import NavTabsDemo1 from './demo/NavTabsDemo1';
import ToastDemo1 from './demo/ToastDemo1';
import PaginationDemo1 from './demo/PaginationDemo1';

// assets
import placeHolders64 from "../../../images/placeholders/64x64.svg";

const SomeComponents = (props) => {
  return (
    <React.Fragment>
      <Container fluid={ false }>
        <div className="d-flex mt-3 mb-5">
            <HeaderMain 
              title="Some Components"
              className="mt-0"
            />
        </div>

        <HeaderDemo 
            no={1} 
            title="Media: Object" 
            className="mt-5"
            subTitle=""
        />
        <Media>
          <Media left href="#">
            <Media object src={placeHolders64} alt="Generic placeholder image" className="mr-3" />
          </Media>
          <Media body>
            <Media heading>
              Media heading
            </Media>
            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
          </Media>
        </Media>

        <HeaderDemo 
            no={2} 
            title="Media: Nesting" 
            className="mt-5"
            subTitle=""
        />
        <Media>
          <Media left href="#">
            <Media object src={placeHolders64} alt="Generic placeholder image" className="mr-3" />
          </Media>
          <Media body>
            <Media heading>
              Media heading
            </Media>
            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
            <Media className="mt-3">
              <Media left href="#">
                <Media object src={placeHolders64} alt="Generic placeholder image" className="mr-3" />
              </Media>
              <Media body>
                <Media heading>
                  Nested media heading
                </Media>
                Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
              </Media>
            </Media>
          </Media>
        </Media>

        <HeaderDemo 
            no={3} 
            title="Media: Alignment" 
            className="mt-5"
            subTitle=""
        />
        <Media>
          <Media left top href="#" className="mr-3">
            <Media object src={placeHolders64} alt="Generic placeholder image" />
          </Media>
          <Media body>
            <Media heading>
              Top aligned media
            </Media>
            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
          </Media>
        </Media>
        <Media className="mt-1">
          <Media left middle href="#" className="mr-3">
            <Media object src={placeHolders64} alt="Generic placeholder image" />
          </Media>
          <Media body>
            <Media heading>
              Middle aligned media
            </Media>
            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
          </Media>
        </Media>
        <Media className="mt-1">
          <Media left bottom href="#" className="mr-3">
            <Media object src={placeHolders64} alt="Generic placeholder image" />
          </Media>
          <Media body>
            <Media heading>
              Bottom aligned media
            </Media>
            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
          </Media>
        </Media>


        <HeaderDemo 
            no={4} 
            title="Media: List" 
            className="mt-5"
            subTitle=""
        />
        <Media list>
          <Media tag="li">
            <Media left href="#">
              <Media object src={placeHolders64} alt="Generic placeholder image" className="mr-3" />
            </Media>
            <Media body>
              <Media heading>
                Media heading
              </Media>
              Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
              <Media>
                <Media left href="#">
                  <Media object src={placeHolders64} alt="Generic placeholder image" className="mr-3" />
                </Media>
                <Media body>
                  <Media heading>
                    Nested media heading
                  </Media>
                  Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                  <Media>
                    <Media left href="#">
                      <Media object src={placeHolders64} alt="Generic placeholder image" className="mr-3" />
                    </Media>
                    <Media body>
                      <Media heading>
                        Nested media heading
                      </Media>
                      Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                    </Media>
                  </Media>
                </Media>
              </Media>
              <Media>
                <Media left href="#">
                  <Media object src={placeHolders64} alt="Generic placeholder image" className="mr-3" />
                </Media>
                <Media body>
                  <Media heading>
                    Nested media heading
                  </Media>
                  Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                </Media>
              </Media>
            </Media>
          </Media>
          <Media tag="li">
            <Media body>
              <Media heading>
                Media heading
              </Media>
              Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
            </Media>
            <Media right href="#">
              <Media object src={placeHolders64} alt="Generic placeholder image" className="ml-3" />
            </Media>
          </Media>
        </Media>
        
        <HeaderDemo 
            no={5} 
            title="Navbar" 
            className="mt-5"
            subTitle=""
        />
        <NavbarDemo1 />
        
        <HeaderDemo 
            no={6} 
            title="Navbar: Toggler" 
            className="mt-5"
            subTitle=""
        />
        <NavbarDemo2 />

        
        
        <HeaderDemo 
            no={7} 
            title="Nav: List Based" 
            className="mt-5"
            subTitle=""
        />
        <Nav>
          <NavItem>
            <NavLink href="#">Link</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Link</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Another Link</NavLink>
          </NavItem>
          <NavItem>
            <NavLink disabled href="#">Disabled Link</NavLink>
          </NavItem>
        </Nav>

                
                
        <HeaderDemo 
            no={8} 
            title="Nav: Link based" 
            className="mt-5"
            subTitle=""
        />
        <Nav vertical>
          <NavLink href="#">Link</NavLink> 
          <NavLink href="#">Link</NavLink> 
          <NavLink href="#">Another Link</NavLink> 
          <NavLink disabled href="#">Disabled Link</NavLink>
        </Nav>

                
                
        <HeaderDemo 
            no={9} 
            title="Nav: Tabs" 
            className="mt-5"
            subTitle=""
        />
        <Nav tabs>
          <NavItem>
            <NavLink href="#" active>Link</NavLink>
          </NavItem>
          <UncontrolledDropdown nav>
            <DropdownToggle nav caret>
              Dropdown
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem header>Header</DropdownItem>
              <DropdownItem disabled>Action</DropdownItem>
              <DropdownItem>Another Action</DropdownItem>
              <DropdownItem divider />
              <DropdownItem>Another Action</DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
          <NavItem>
            <NavLink href="#">Link</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Another Link</NavLink>
          </NavItem>
          <NavItem>
            <NavLink disabled href="#">Disabled Link</NavLink>
          </NavItem>
        </Nav>
        <br />
        <Nav pills>
          <NavItem>
            <NavLink href="#" active>Link</NavLink>
          </NavItem>
          <UncontrolledDropdown nav>
            <DropdownToggle nav caret>
              Dropdown
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem header>Header</DropdownItem>
              <DropdownItem disabled>Action</DropdownItem>
              <DropdownItem>Another Action</DropdownItem>
              <DropdownItem divider />
              <DropdownItem>Another Action</DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
          <NavItem>
            <NavLink href="#">Link</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Another Link</NavLink>
          </NavItem>
          <NavItem>
            <NavLink disabled href="#">Disabled Link</NavLink>
          </NavItem>
        </Nav>
        <br />
        <NavTabsDemo1 />



                
                
        <HeaderDemo 
            no={10} 
            title="Spinner" 
            className="mt-5"
            subTitle=""
        />
        <div>
          <Spinner color="primary" />
          <Spinner type="grow" color="primary" />
          <Spinner size="sm" color="primary" />{' '}
          <Spinner style={{ width: '3rem', height: '3rem' }} />{' '}
          <Spinner style={{ width: '3rem', height: '3rem' }} type="grow" />
        </div>
                
        <HeaderDemo 
            no={11} 
            title="Toast" 
            className="mt-5"
            subTitle=""
        />
        <ToastDemo1 />

        <HeaderDemo 
            no={12} 
            title="Pagination" 
            className="mt-5"
            subTitle=""
        />
        <PaginationDemo1 />

            


      </Container>
    </React.Fragment>
  )};

export default SomeComponents;
