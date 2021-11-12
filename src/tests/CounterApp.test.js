import { shallow } from "enzyme";
import CounterApp from "../CounterApp";

describe("Analizando valores del componente <CounterApp />", () => {
  let wrapper = shallow(<CounterApp />);

  beforeEach(() => {
    wrapper = shallow(<CounterApp />);
  });

  test("Validando el valor por defecto", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("Mofidicando el valor por defecto", () => {
    const wrapper = shallow(<CounterApp value={100} />);
    const h2num = wrapper.find("h2").text().trim();
    expect(h2num).toBe("100");
  });

  test("debe de incrementar con el boton de +1", () => {
    wrapper.find("button").at(0).simulate("click");
    const h2num = wrapper.find("h2").text().trim();
    expect(h2num).toBe("2");
  });

  test("debe de incrementar con el boton de -1", () => {
    wrapper.find("button").at(1).simulate("click");
    const h2num = wrapper.find("h2").text().trim();
    expect(h2num).toBe("0");
  });

  test("debe de colocar el valor por defecto con el boton de reset", () => {
    const wrapper = shallow(<CounterApp value={105} />);
    wrapper.find("button").at(0).simulate("click");
    wrapper.find("button").at(0).simulate("click");
    wrapper.find(".button_reset").simulate("click");
    const buttonPlus = wrapper.find("h2").text().trim();
    expect(buttonPlus).toBe("105");
  });
});
