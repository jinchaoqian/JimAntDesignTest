import {Form, Card} from 'antd';

import PageHeaderWrapper from '@/components/PageHeaderWrapper';
import FormItem from 'antd/lib/form/FormItem';

@Form.create()
class FormTest extends React.Component
{
    render(){

        return(
            <div>
                <PageHeaderWrapper title='测试表单' content='描述这个表单干啥用的'>
                    <Card title='表单' 
                    extra={<a href='#'>更多</a>}  
                    >
                        <Form layout='inline'> 
                            <FormItem
                            label = '测试FormItem'
                            colon = 'false'
                            required 
                            hasFeedback ='true'
                            help='请输入测试文本'
                            >
                            <input id='testInput' ></input>
                            </FormItem>
                        </Form>
                    </Card>
                </PageHeaderWrapper>
            </div>
        );

    };
}

export default FormTest;
