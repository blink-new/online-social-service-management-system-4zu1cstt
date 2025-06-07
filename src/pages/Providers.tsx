import { 
  Plus, 
  Search, 
  Filter, 
  MoreVertical,
  Edit,
  Eye,
  Phone,
  Mail,
  Star,
  Calendar,
  Clock
} from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card'
import { Button } from '../components/ui/button'
import { Input } from '../components/ui/input'
import { Badge } from '../components/ui/badge'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '../components/ui/dropdown-menu'
import { Avatar, AvatarFallback, AvatarImage } from '../components/ui/avatar'

const providers = [
  {
    id: 1,
    name: 'Dr. Sarah Smith',
    title: 'Licensed Clinical Psychologist',
    email: 'sarah.smith@socialcare.com',
    phone: '(555) 123-4567',
    specializations: ['Mental Health', 'Trauma Therapy', 'Family Counseling'],
    status: 'active',
    rating: 4.9,
    totalClients: 89,
    weeklyHours: 40,
    nextAvailable: '2024-01-18 9:00 AM',
    joinDate: '2022-03-15'
  },
  {
    id: 2,
    name: 'Maria Garcia',
    title: 'Family Support Specialist',
    email: 'maria.garcia@socialcare.com',
    phone: '(555) 234-5678',
    specializations: ['Family Support', 'Crisis Intervention', 'Child Services'],
    status: 'active',
    rating: 4.8,
    totalClients: 67,
    weeklyHours: 35,
    nextAvailable: '2024-01-17 2:00 PM',
    joinDate: '2021-07-20'
  },
  {
    id: 3,
    name: 'John Williams',
    title: 'Career Development Counselor',
    email: 'john.williams@socialcare.com',
    phone: '(555) 345-6789',
    specializations: ['Career Counseling', 'Job Placement', 'Skills Training'],
    status: 'active',
    rating: 4.7,
    totalClients: 45,
    weeklyHours: 30,
    nextAvailable: '2024-01-19 10:00 AM',
    joinDate: '2023-01-10'
  },
  {
    id: 4,
    name: 'Robert Brown',
    title: 'Housing Assistance Coordinator',
    email: 'robert.brown@socialcare.com',
    phone: '(555) 456-7890',
    specializations: ['Housing Assistance', 'Case Management', 'Benefits Navigation'],
    status: 'inactive',
    rating: 4.6,
    totalClients: 123,
    weeklyHours: 0,
    nextAvailable: 'Not Available',
    joinDate: '2020-09-05'
  }
]

export default function Providers() {
  const getStatusColor = (status: string) => {
    return status === 'active' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
  }

  const getRatingStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star 
        key={i} 
        className={`h-4 w-4 ${i < Math.floor(rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
      />
    ))
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Service Providers</h1>
          <p className="text-gray-600">Manage your team of service providers</p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Add Provider
        </Button>
      </div>

      {/* Filters */}
      <Card>
        <CardContent className="p-6">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                type="text"
                placeholder="Search providers..."
                className="pl-10"
              />
            </div>
            
            <Select>
              <SelectTrigger className="w-full sm:w-48">
                <Filter className="mr-2 h-4 w-4" />
                <SelectValue placeholder="Specialization" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Specializations</SelectItem>
                <SelectItem value="mental-health">Mental Health</SelectItem>
                <SelectItem value="family-support">Family Support</SelectItem>
                <SelectItem value="career">Career Counseling</SelectItem>
                <SelectItem value="housing">Housing Assistance</SelectItem>
              </SelectContent>
            </Select>

            <Select>
              <SelectTrigger className="w-full sm:w-32">
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="active">Active</SelectItem>
                <SelectItem value="inactive">Inactive</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Providers Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {providers.map((provider) => (
          <Card key={provider.id} className="hover:shadow-md transition-shadow">
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between">
                <div className="flex items-center space-x-3">
                  <Avatar className="h-12 w-12">
                    <AvatarImage src={`/api/placeholder/48/48`} />
                    <AvatarFallback>
                      {provider.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle className="text-lg">{provider.name}</CardTitle>
                    <p className="text-sm text-gray-600">{provider.title}</p>
                  </div>
                </div>
                
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="sm">
                      <MoreVertical className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem>
                      <Eye className="mr-2 h-4 w-4" />
                      View Profile
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Edit className="mr-2 h-4 w-4" />
                      Edit
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Calendar className="mr-2 h-4 w-4" />
                      View Schedule
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </CardHeader>
            
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <Badge className={getStatusColor(provider.status)}>
                  {provider.status}
                </Badge>
                <div className="flex items-center space-x-1">
                  {getRatingStars(provider.rating)}
                  <span className="text-sm text-gray-600 ml-1">{provider.rating}</span>
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center text-sm">
                  <Mail className="mr-2 h-4 w-4 text-gray-400" />
                  <span className="text-gray-600">{provider.email}</span>
                </div>
                <div className="flex items-center text-sm">
                  <Phone className="mr-2 h-4 w-4 text-gray-400" />
                  <span className="text-gray-600">{provider.phone}</span>
                </div>
              </div>
              
              <div>
                <p className="text-sm font-medium text-gray-700 mb-2">Specializations:</p>
                <div className="flex flex-wrap gap-1">
                  {provider.specializations.map((spec, index) => (
                    <Badge key={index} variant="secondary" className="text-xs">
                      {spec}
                    </Badge>
                  ))}
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-gray-600">Active Clients</p>
                  <p className="font-medium">{provider.totalClients}</p>
                </div>
                <div>
                  <p className="text-gray-600">Weekly Hours</p>
                  <p className="font-medium">{provider.weeklyHours}h</p>
                </div>
              </div>
              
              <div className="pt-2 border-t border-gray-200">
                <div className="flex items-center text-sm">
                  <Clock className="mr-2 h-4 w-4 text-gray-400" />
                  <span className="text-gray-600">
                    Next available: {provider.nextAvailable}
                  </span>
                </div>
              </div>
              
              <div className="flex space-x-2">
                <Button variant="outline" size="sm" className="flex-1">
                  <Phone className="mr-1 h-3 w-3" />
                  Call
                </Button>
                <Button variant="outline" size="sm" className="flex-1">
                  <Mail className="mr-1 h-3 w-3" />
                  Email
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}