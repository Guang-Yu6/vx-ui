import React from 'react'
import PropTypes from 'prop-types'
import StyledAca, {AvaClip, AvaImage, StatusIcon} from "./style";

function Ava({src, size = '48px', status, statusIconSize = '8px', ...rest}) {
    return (
        <StyledAca {...rest}>
            {status && (
                <StatusIcon status={status} size={statusIconSize}> </StatusIcon>
            )}
            <AvaClip size={size}>
                <AvaImage src={src}/>
            </AvaClip>
        </StyledAca>
    )
}

Ava.propTypes = {
    src:PropTypes.string.isRequired,
    size:PropTypes.string,
    status:PropTypes.oneOf(['online','offline']),
    statusIconSize:PropTypes.string
}

export default Ava

