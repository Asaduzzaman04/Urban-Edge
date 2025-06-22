import React from 'react'
import {
  ListItem,
  ListItemButton,
  ListItemText,
  Collapse,
  List,
  Typography,
  Checkbox
} from '@mui/material'
import { FiChevronDown, FiChevronUp, FiTag } from 'react-icons/fi'

const CategoryCollapseItem = ({
  item,
  openCategory,
  handleCategoryClick,
  showCheckbox = false,
  selectedSubcategories = [],
  handleCheckboxChange = () => {}
}) => {
  return (
    <div>
      {/* Parent Category */}
      <ListItem disablePadding>
        <ListItemButton onClick={() => handleCategoryClick(item.name)}>
          <span className="mr-2 text-black font-bold">{item.icon}</span>
          <ListItemText
            primary={
              <Typography sx={{ fontFamily: 'Montserrat, sans-serif' }}>
                {item.name}
              </Typography>
            }
          />
          {openCategory === item.name ? <FiChevronUp /> : <FiChevronDown />}
        </ListItemButton>
      </ListItem>

      {/* Subcategories */}
      <Collapse in={openCategory === item.name} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {item.subcategories.map((sub) => (
            <ListItem key={sub} disablePadding>
              {/* Make the entire ListItemButton clickable */}
              <ListItemButton
                sx={{ pl: 6 }}
                onClick={() => handleCheckboxChange(sub)}
              >
                {showCheckbox ? (
                  <Checkbox
                    size="small"
                    edge="start"
                    checked={selectedSubcategories.includes(sub)}
                    className="!mr-2"
                    onClick={(e) => e.stopPropagation()}
                    onChange={() => handleCheckboxChange(sub)}
                  />
                ) : (
                  <FiTag className="mr-2" />
                )}
                <ListItemText
                  primary={
                    <Typography sx={{ fontFamily: 'Montserrat, sans-serif' }}>
                      {sub}
                    </Typography>
                  }
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Collapse>
    </div>
  )
}

export default CategoryCollapseItem
