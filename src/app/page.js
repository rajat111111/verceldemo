import {
  Button,
  Card,
  CardContent,
  Typography,
  Grid,
  Box,
  Paper,
  Stack,
  Divider,
  Avatar,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  LinearProgress
} from '@mui/material';
import {
  Dashboard as DashboardIcon,
  ShoppingCart,
  People,
  AttachMoney,
  TrendingUp,
  Notifications,
  CalendarToday,
  Inventory,
  Email
} from '@mui/icons-material';

export default function Home() {
  // Sample data
  const stats = [
    { title: 'Total Sales', value: '$24,345', icon: <AttachMoney />, change: '+12%', trend: 'up' },
    { title: 'New Customers', value: '1,234', icon: <People />, change: '+16%', trend: 'up' },
    { title: 'Inventory', value: '845', icon: <Inventory />, change: '-3%', trend: 'down' },
    { title: 'Pending Orders', value: '56', icon: <ShoppingCart />, change: '+5%', trend: 'up' }
  ];

  const recentActivities = [
    { user: 'John Doe', action: 'placed new order', time: '5 min ago' },
    { user: 'Jane Smith', action: 'updated profile', time: '1 hour ago' },
    { user: 'Robert Johnson', action: 'completed payment', time: '2 hours ago' },
    { user: 'Emily Davis', action: 'requested return', time: '3 hours ago' }
  ];

  return (
    <Box sx={{ p: 3 }}>
      {/* Header */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
        <Typography variant="h4" component="h1" sx={{ fontWeight: 'bold' }}>
          <DashboardIcon sx={{ verticalAlign: 'middle', mr: 1 }} />
          Dashboard
        </Typography>
        <Stack direction="row" spacing={2}>
          <Button variant="outlined" startIcon={<CalendarToday />}>
            Calendar
          </Button>
          <Button variant="outlined" startIcon={<Email />}>
            Messages
          </Button>
          <Button variant="contained" color="secondary" startIcon={<Notifications />}>
            Alerts
          </Button>
        </Stack>
      </Box>

      {/* Stats Cards */}
      <Grid container spacing={3} sx={{ mb: 4 }}>
        {stats.map((stat, index) => (
          <Grid item key={index} size={{ xs: 12, sm: 6, md: 3 }}>
            <Card sx={{ height: '100%' }}>
              <CardContent>
                <Stack direction="row" justifyContent="space-between" alignItems="center">
                  <Box>
                    <Typography color="text.secondary" gutterBottom>
                      {stat.title}
                    </Typography>
                    <Typography variant="h5" component="div">
                      {stat.value}
                    </Typography>
                    <Typography
                      variant="body2"
                      color={stat.trend === 'up' ? 'success.main' : 'error.main'}
                      sx={{ display: 'flex', alignItems: 'center', mt: 1 }}
                    >
                      <TrendingUp fontSize="small" sx={{ mr: 0.5 }} />
                      {stat.change}
                    </Typography>
                  </Box>
                  <Avatar sx={{ bgcolor: 'secondary.light', width: 56, height: 56 }}>
                    {stat.icon}
                  </Avatar>
                </Stack>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Main Content */}
      <Grid container spacing={3}>
        {/* Sales Chart */}
        <Grid item size={{ xs: 12, md: 8 }}>
          <Paper sx={{ p: 2, height: '100%' }}>
            <Typography variant="h6" gutterBottom>
              Sales Overview
            </Typography>
            <Box sx={{ height: 300, bgcolor: 'action.hover', borderRadius: 1, p: 2 }}>
              <Typography color="text.secondary" align="center" sx={{ mt: 10 }}>
                Chart Component Placeholder
              </Typography>
            </Box>
          </Paper>
        </Grid>

        {/* Recent Activities */}
        <Grid item size={{ xs: 12, md: 4 }}>
          <Paper sx={{ p: 2, height: '100%' }}>
            <Typography variant="h6" gutterBottom>
              Recent Activities
            </Typography>
            <List>
              {recentActivities.map((activity, index) => (
                <Box key={index}>
                  <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                      <Avatar alt={activity.user} src="/static/images/avatar/1.jpg" />
                    </ListItemAvatar>
                    <ListItemText
                      primary={activity.user}
                      secondary={
                        <>
                          <Typography component="span" variant="body2" color="text.primary">
                            {activity.action}
                          </Typography>
                          <br />
                          {activity.time}
                        </>
                      }
                    />
                  </ListItem>
                  {index < recentActivities.length - 1 && <Divider variant="inset" component="li" />}
                </Box>
              ))}
            </List>
          </Paper>
        </Grid>

        {/* Tasks Progress */}
        <Grid item size={{ xs: 12, md: 6 }}>
          <Paper sx={{ p: 2 }}>
            <Typography variant="h6" gutterBottom>
              Tasks Progress
            </Typography>
            <Box sx={{ mb: 2 }}>
              <Typography>Website Redesign</Typography>
              <LinearProgress variant="determinate" value={75} sx={{ height: 8, borderRadius: 4 }} />
              <Typography variant="body2" color="text.secondary">75% completed</Typography>
            </Box>
            <Box sx={{ mb: 2 }}>
              <Typography>Mobile App Development</Typography>
              <LinearProgress variant="determinate" value={45} color="secondary" sx={{ height: 8, borderRadius: 4 }} />
              <Typography variant="body2" color="text.secondary">45% completed</Typography>
            </Box>
            <Box>
              <Typography>Marketing Campaign</Typography>
              <LinearProgress variant="determinate" value={90} color="success" sx={{ height: 8, borderRadius: 4 }} />
              <Typography variant="body2" color="text.secondary">90% completed</Typography>
            </Box>
          </Paper>
        </Grid>

        {/* Quick Actions */}
        <Grid item size={{ xs: 12, md: 6 }}>
          <Paper sx={{ p: 2 }}>
            <Typography variant="h6" gutterBottom>
              Quick Actions
            </Typography>
            <Grid container spacing={2}>
              <Grid item size={{ xs: 6 }}>
                <Button fullWidth variant="contained" startIcon={<Email />} sx={{ py: 2 }}>
                  Send Email
                </Button>
              </Grid>
              <Grid item size={{ xs: 6 }}>
                <Button fullWidth variant="outlined" startIcon={<People />} sx={{ py: 2 }}>
                  Add Client
                </Button>
              </Grid>
              <Grid item size={{ xs: 6 }}>
                <Button fullWidth variant="outlined" startIcon={<Inventory />} sx={{ py: 2 }}>
                  Manage Stock
                </Button>
              </Grid>
              <Grid item size={{ xs: 6 }}>
                <Button fullWidth variant="contained" color="secondary" startIcon={<ShoppingCart />} sx={{ py: 2 }}>
                  New Order
                </Button>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}