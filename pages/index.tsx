import { Box, Button, Flex,Form, FormGroup, H1, H4,Input,Panel } from '@bigcommerce/big-design';
import styled from 'styled-components';
import ErrorMessage from '../components/error';
import Loading from '../components/loading';
import { useProducts } from '../lib/hooks';

const Index = () => {
    const { error, isLoading, summary } = useProducts();

    if (isLoading) return <Loading />;
    if (error) return <ErrorMessage error={error} />;

    return (
        <Panel header="Synexus" id="home">
            <Flex>
                <StyledBox border="box" borderRadius="normal" marginRight="xLarge" padding="medium">
                    <H4>Inventory count</H4>
                    <H1 marginBottom="none">{summary.inventory_count}</H1>
                </StyledBox>
                <StyledBox border="box" borderRadius="normal" marginRight="xLarge" padding="medium">
                    <H4>Variant count</H4>
                    <H1 marginBottom="none">{summary.variant_count}</H1>
                </StyledBox>
                <StyledBox border="box" borderRadius="normal" padding="medium">
                    <H4>Primary category</H4>
                    <H1 marginBottom="none">{summary.primary_category_name}</H1>
                </StyledBox>
            </Flex>
            <Form>
                <FormGroup>
                 <Input
                description="Please provide a valid email address."
                label="Email"
                placeholder="Email address"
                required
                type="email"
             />
                </FormGroup>
                <FormGroup>
                <Input label="Password" placeholder="Password" required type="password" />
                </FormGroup>
                <Box marginTop="xxLarge">
                <Button type="submit">Sign in</Button>
                </Box>
                </Form>
        </Panel>
        
    );
};

const StyledBox = styled(Box)`
    min-width: 10rem;
`;

export default Index;
