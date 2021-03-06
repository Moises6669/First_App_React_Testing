import Enzime from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import { createSerializer } from "enzyme-to-json";

Enzime.configure({ adapter: new Adapter() });

expect.addSnapshotSerializer(createSerializer({ mode: "deep" }));
