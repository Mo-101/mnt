# coding: utf-8

from __future__ import absolute_import
from datetime import date, datetime  # noqa: F401

from typing import List, Dict  # noqa: F401

from swagger_server.models.base_model_ import Model
from swagger_server import util


class ApiHabitatsBody(Model):
    """NOTE: This class is auto generated by the swagger code generator program.

    Do not edit the class manually.
    """
    def __init__(self, satellite_data: Object=None):  # noqa: E501
        """ApiHabitatsBody - a model defined in Swagger

        :param satellite_data: The satellite_data of this ApiHabitatsBody.  # noqa: E501
        :type satellite_data: Object
        """
        self.swagger_types = {
            'satellite_data': Object
        }

        self.attribute_map = {
            'satellite_data': 'satellite_data'
        }
        self._satellite_data = satellite_data

    @classmethod
    def from_dict(cls, dikt) -> 'ApiHabitatsBody':
        """Returns the dict as a model

        :param dikt: A dict.
        :type: dict
        :return: The api_habitats_body of this ApiHabitatsBody.  # noqa: E501
        :rtype: ApiHabitatsBody
        """
        return util.deserialize_model(dikt, cls)

    @property
    def satellite_data(self) -> Object:
        """Gets the satellite_data of this ApiHabitatsBody.

        Base64 encoded satellite imagery data for habitat detection  # noqa: E501

        :return: The satellite_data of this ApiHabitatsBody.
        :rtype: Object
        """
        return self._satellite_data

    @satellite_data.setter
    def satellite_data(self, satellite_data: Object):
        """Sets the satellite_data of this ApiHabitatsBody.

        Base64 encoded satellite imagery data for habitat detection  # noqa: E501

        :param satellite_data: The satellite_data of this ApiHabitatsBody.
        :type satellite_data: Object
        """

        self._satellite_data = satellite_data
