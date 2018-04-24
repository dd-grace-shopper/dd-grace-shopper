import React, { Component } from 'react'
import { Sidebar, Segment, Button, Menu, Image, Icon, Header, Form, Checkbox,Lable } from 'semantic-ui-react'

export default class SidebarLeft extends Component {
  constructor(props) {
    super(props);
    this.state = {}; // hash of what categories are currently checked
    this.toggleSingleFilterCheckbox = this.toggleSingleFilterCheckbox.bind(this);
    this.resetAllFilterBoxes = this.resetAllFilterBoxes.bind(this);
  }

  componentDidMount() {
    if (this.props.getAllProducts) this.props.getAllProducts();
    if (this.props.uniqueCategoriesForSidebar) {
      this.props.uniqueCategoriesForSidebar.forEach(category => {
        this.setState({ [category]: false });
      });
    }
    if (this.props.uniqueSizesForSidebar) {
      this.props.uniqueSizesForSidebar.forEach(size => {
        this.setState({ [size]: false });
      });
    }
    if (this.props.uniquePricesForSidebar) {
      this.props.uniquePricesForSidebar.forEach(price => {
        this.setState({ [price]: false });
      });
    }
  }

  componentWillUnmount() {
    this.props.resetSidebarFilters();
  }

  toggleSingleFilterCheckbox(filterName) {
    this.setState(prevState => {
      return { [filterName]: !prevState[filterName] };
    });
  }
  resetAllFilterBoxes() {
    this.setState(prevState => {
      return Object.keys(prevState).reduce((newState, filterName) => {
        newState[filterName] = false;
        return newState;
      }, {});
    });
  }

  render() {
    let {
      visible, products, productsById, filter,
      uniqueCategoriesForSidebar, uniqueSizesForSidebar, uniquePricesForSidebar
    } = this.props ? this.props : null;

      return (
        <div>
          <Sidebar as={Menu} className="ui vertical inverted" animation="push" visible={visible}>
            <Form.Group inline>
              <label>Category</label>
                {
                  products && uniqueCategoriesForSidebar.map(category => {
                    return (
                      <div key={category}>
                        <Form.Field
                          label={category}
                          value={category}
                          control="input"
                          type="checkbox"
                          onChange={event => {
                            this.toggleSingleFilterCheckbox(category);
                            this.props.handleChange(event);
                          }}
                          checked={this.state[category]}
                        />
                      </div>
                    );
                  })
                }
              <label>Size</label>
                {
                  products && uniqueSizesForSidebar.map(size => {
                    return (
                      <div key={size}>
                        <Form.Field
                          label={size}
                          value={size}
                          control="input"
                          type="checkbox"
                          onChange={event => {
                            this.props.handleChange(event);
                            this.toggleSingleFilterCheckbox(size);
                          }}
                          checked={this.state[size]}
                        />
                      </div>
                    );
                  })
                }
              <label>Price</label>
                {
                  products && uniquePricesForSidebar.map(price => {
                    return (
                      <div key={price}>
                        <Form.Field
                          label={price}
                          value={price}
                          control="input"
                          type="checkbox"
                          onChange={event => {
                            this.toggleSingleFilterCheckbox(price);
                            this.props.handleChange(event);
                          }}
                          checked={this.state[price]}
                        />
                      </div>
                    );
                  })
                }
              <Button
                type="reset"
                onClick={event => {
                  this.props.handleClick(event);
                  this.resetAllFilterBoxes();
                }}
              >
                Reset
              </Button>
            </Form.Group>
          </Sidebar>

        </div>
      )

  }
}
