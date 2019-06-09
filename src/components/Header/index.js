import React, { useContext } from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingBasket } from '@fortawesome/free-solid-svg-icons'

import styled from '@emotion/styled'
import { Flex, Box } from '@rebass/grid/emotion'

import StoreContext from '../../context/StoreContext'

const Wrapper = styled.div({
	background: `linear-gradient(#141E30 0, #243B55 100%)`,
	marginBottom: `1.45rem`,
	padding: `1rem`
})

const CartCounter = styled.span({
	backgroundColor: `white`,
	color: `#663399`,
	borderRadius: `100%`,
	padding: `10px`,
	fontSize: `1rem`,
	
	
	
})

// Style P-Tag for **Menu Links**
const H1 = props => (
	<p
		style={{
			margin: 0,
			marginRight: 20, 
			display: `inline-block`,

		}}
	>
		<Link
			{...props}
			style={{
				color: `white`,
				textDecoration: `none`,
			}}
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
					<H1 to='/'>
						Home
					</H1>
					<H1 to='/shop/'>
						Shop
					</H1>
					<H1 to='/blog/'>
						Blog
					</H1>
					<H1 to='/contact/'>
						Contact
					</H1>
				</Box>
				<Box style={{border:"1px solid black"}} ml='auto'>
					<H1 to='/cart'>
						{lineItems.length !== 0 &&
							<CartCounter>
								{lineItems.length}
							</CartCounter>
						}
						<FontAwesomeIcon icon={faShoppingBasket} /> Cart
					</H1>
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
