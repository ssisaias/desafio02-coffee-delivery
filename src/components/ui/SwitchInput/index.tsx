
import styled from "styled-components";

const SwitchInput = styled.input`
  height: 0;
  width: 0;
  visibility: hidden;
`;

const SwitchLabel = styled.label`
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  width: 2.5rem;
  height: 25px;
  border-radius: 100px;
  border: 2px solid ${props => props.theme['toggle-button']};
  position: relative;
  transition: background-color 0.2s;
`;

const SwitchButton = styled.span`
  content: "";
  position: absolute;
  top: 2px;
  left: 2px;
  width: 1.3rem;
  height: 20px;
  border-radius: 45px;
  transition: 0.2s;
  background: ${props => props.theme['toggle-button']};
  box-shadow: 0 0 2px 0 rgba(10, 10, 10, 0.29);
  ${SwitchInput}:checked + ${SwitchLabel} & {
    left: calc(100% - 2px);
    transform: translateX(-100%);
  }

  ${SwitchLabel}:active & {
    width: 25px;
  }
`;

interface SwitchInterface {
  id: string;
  toggled: boolean;
  onChange: () => void;
}

const Switch = ({ id, toggled, onChange } : SwitchInterface) => {
  return (
    <>
      <SwitchInput
        className="switch-checkbox"
        id={id}
        type="checkbox"
        checked={toggled}
        onChange={onChange}
      />
      <SwitchLabel className="switch-label" htmlFor={id}>
        <SwitchButton className="switch-button">
        </SwitchButton>
      </SwitchLabel>
    </>
  );
};

export default Switch;