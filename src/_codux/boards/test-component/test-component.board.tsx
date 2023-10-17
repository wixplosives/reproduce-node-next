import { createBoard } from '@wixc3/react-board';
import { TestComponent } from '../../../components/test-component/test-component.jsx';

export default createBoard({
    name: 'TestComponent',
    Board: () => <TestComponent />,
    isSnippet: true,
});
