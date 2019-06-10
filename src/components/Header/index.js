import React, { useContext } from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingBasket } from '@fortawesome/free-solid-svg-icons'

import styled from '@emotion/styled'
import { Flex, Box } from '@rebass/grid/emotion'

import StoreContext from '../../context/StoreContext'


//Navbar Component 
const Wrapper = styled.div({
	background: `white`,
	// marginBottom: `1.45rem`,
	padding: `1rem`
})

//Displays when user adds to cart 
const CartCounter = styled.div({
	backgroundColor: `white`,
	color: `#663399`,
	textAlign: `center`,
	display: `inline-block`,
	width: `20px`,
	height: `20px`,
	borderRadius: `100%`,
	marginLeft: `5px`
})

// Style P-Tag for **Menu Links**
const NavLink = props => (
	<p
		style={{
			margin: 0,
			marginRight: 20, 
			display: `inline-block`,
			fontSize: `1.5rem`,
			
		}}
	>
		<Link
			{...props}
			style={{
				color: `#383838`,
				textDecoration: `none`,
			}}
			activeStyle={{ color: "grey", borderBottom:"1px solid grey"}}
		>
			{props.children}
		</Link>
	</p>
)

const Container = props => (
	<Flex
		{...props}
		mx='auto'
		px={[`1.0875rem`, null, null, 0]}
		py='1.45rem'
		css={{
			margin: `0 auto`,
			maxWidth: 960,
		}}
	/>
)

const Header = ({ siteTitle }) => {
	const context = useContext(StoreContext)

	const { lineItems } = context.checkout

	return(
		<Wrapper>
			<Container>
				<Box>
					<NavLink to='/'>
						mufflr
					</NavLink>
					<NavLink to='/shop/'>
						shop
					</NavLink>
					<NavLink to='/blog/'>
						blog
					</NavLink>
					<NavLink to='/contact/'>
						contact
					</NavLink>
				</Box>
				<Box ml='auto'>
				
					<NavLink to='/cart'>
					Cart  <FontAwesomeIcon icon={faShoppingBasket} /> 
						{lineItems.length !== 0 &&
							<CartCounter>
								{lineItems.length}
							</CartCounter>
						}
						
					</NavLink>
				</Box>
			</Container>
		</Wrapper>
	)
}

Header.propTypes = {
	siteTitle: PropTypes.string,
}

Header.defaultProps = {
	siteTitle: ``,
}

export default Header
